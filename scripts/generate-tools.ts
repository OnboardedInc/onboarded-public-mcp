#!/usr/bin/env tsx
/**
 * Tool Generator
 *
 * Reads spec/public-api.json and generates:
 *   src/tools/{resource}.ts   — one file per API resource group
 *   src/tools/index.ts        — aggregates all resource modules
 *
 * Usage: npx tsx scripts/generate-tools.ts
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SPEC_PATH = join(ROOT, "spec", "public-api.json");
const TOOLS_DIR = join(ROOT, "src", "tools");

// ── Types ──────────────────────────────────────────────────────────

interface OpenApiSpec {
  paths: Record<string, Record<string, OperationObject>>;
  components?: { schemas?: Record<string, SchemaObject> };
}

interface OperationObject {
  operationId?: string;
  summary?: string;
  description?: string;
  tags?: string[];
  parameters?: ParameterObject[];
  requestBody?: {
    required?: boolean;
    content?: Record<string, { schema?: SchemaObject }>;
  };
  responses?: Record<
    string,
    { description?: string; content?: Record<string, { schema?: SchemaObject }> }
  >;
}

interface ParameterObject {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  required?: boolean;
  schema?: SchemaObject;
  description?: string;
}

interface SchemaObject {
  type?: string;
  format?: string;
  properties?: Record<string, SchemaObject>;
  items?: SchemaObject;
  required?: string[];
  enum?: unknown[];
  description?: string;
  $ref?: string;
  allOf?: SchemaObject[];
  anyOf?: SchemaObject[];
  oneOf?: SchemaObject[];
  additionalProperties?: boolean | SchemaObject;
  title?: string;
}

interface ParsedOperation {
  operationId: string;
  toolName: string;
  method: string;
  path: string;
  summary: string;
  description: string;
  tag: string;
  pathParams: ParameterObject[];
  queryParams: ParameterObject[];
  hasBody: boolean;
  bodySchema?: SchemaObject;
  bodyRequired?: boolean;
}

// ── Helpers ────────────────────────────────────────────────────────

/**
 * Convert operationId like "clients.findById" to "clients_find_by_id"
 */
function operationIdToToolName(operationId: string): string {
  return operationId
    .replace(/\./g, "_")
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .toLowerCase();
}

/**
 * Convert a tag like "Connected Organizations" to "connected_organizations"
 */
function tagToFileName(tag: string): string {
  return tag.replace(/\s+/g, "_").toLowerCase();
}

/**
 * Resolve a $ref to an inline schema (one level deep).
 */
function resolveRef(
  ref: string,
  spec: OpenApiSpec
): SchemaObject | undefined {
  const parts = ref.replace("#/", "").split("/");
  let current: unknown = spec;
  for (const part of parts) {
    if (typeof current === "object" && current !== null) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return current as SchemaObject | undefined;
}

/**
 * Convert an OpenAPI schema to an MCP-compatible JSON Schema property object.
 * Resolves $refs and allOf/anyOf one level deep.
 */
function schemaToJsonSchema(
  schema: SchemaObject,
  spec: OpenApiSpec
): Record<string, unknown> {
  if (schema.$ref) {
    const resolved = resolveRef(schema.$ref, spec);
    if (resolved) return schemaToJsonSchema(resolved, spec);
    return { type: "string" };
  }

  if (schema.allOf) {
    // Merge allOf schemas
    const merged: Record<string, unknown> = {};
    for (const sub of schema.allOf) {
      const resolved = schemaToJsonSchema(sub, spec);
      Object.assign(merged, resolved);
    }
    // Preserve description/title from wrapper
    if (schema.description) merged.description = schema.description;
    if (schema.title) merged.description = schema.title;
    return merged;
  }

  if (schema.anyOf || schema.oneOf) {
    const variants = schema.anyOf ?? schema.oneOf ?? [];
    // If all variants resolve to same type, pick first
    const first = schemaToJsonSchema(variants[0], spec);
    if (schema.description) first.description = schema.description;
    return first;
  }

  const result: Record<string, unknown> = {};

  if (schema.type) result.type = schema.type;
  if (schema.format) result.format = schema.format;
  if (schema.description) result.description = schema.description;
  if (schema.enum) result.enum = schema.enum;

  if (schema.type === "object" && schema.properties) {
    const props: Record<string, unknown> = {};
    for (const [key, propSchema] of Object.entries(schema.properties)) {
      props[key] = schemaToJsonSchema(propSchema, spec);
    }
    result.properties = props;
    if (schema.required) result.required = schema.required;
  }

  if (schema.type === "array" && schema.items) {
    result.items = schemaToJsonSchema(schema.items, spec);
  }

  // Default to string if no type info
  if (!result.type && !result.properties) {
    result.type = "string";
  }

  return result;
}

/**
 * Build the MCP input schema properties for a tool.
 */
function buildInputSchema(
  op: ParsedOperation,
  spec: OpenApiSpec
): { properties: Record<string, unknown>; required: string[] } {
  const properties: Record<string, unknown> = {};
  const required: string[] = [];

  // Path params
  for (const p of op.pathParams) {
    const prop: Record<string, unknown> = {
      type: "string",
      description: p.description ?? `${p.name} path parameter`,
    };
    properties[p.name] = prop;
    required.push(p.name);
  }

  // Query params
  for (const p of op.queryParams) {
    const prop = p.schema
      ? schemaToJsonSchema(p.schema, spec)
      : { type: "string" as const };
    if (p.description && !prop.description) {
      prop.description = p.description;
    }
    // Force query params to string type for MCP compatibility
    // (they get serialized to URL params anyway)
    if (prop.type === "number" || prop.type === "integer") {
      prop.type = "number";
    }
    properties[p.name] = prop;
    if (p.required) {
      required.push(p.name);
    }
  }

  // Request body — flatten top-level properties into the tool input
  if (op.hasBody && op.bodySchema) {
    const bodyResolved = op.bodySchema.$ref
      ? resolveRef(op.bodySchema.$ref, spec) ?? op.bodySchema
      : op.bodySchema;

    if (bodyResolved.properties) {
      for (const [key, propSchema] of Object.entries(
        bodyResolved.properties
      )) {
        // Don't overwrite path/query params
        if (!(key in properties)) {
          properties[key] = schemaToJsonSchema(propSchema, spec);
        }
      }
      if (bodyResolved.required) {
        for (const r of bodyResolved.required) {
          if (!required.includes(r)) {
            required.push(r);
          }
        }
      }
    } else {
      // Non-object body — pass as `body` property
      properties.body = {
        type: "object",
        description: "Request body",
      };
      if (op.bodyRequired) {
        required.push("body");
      }
    }
  }

  return { properties, required };
}

// ── Parsing ────────────────────────────────────────────────────────

function parseOperations(spec: OpenApiSpec): ParsedOperation[] {
  const operations: ParsedOperation[] = [];
  const methods = ["get", "post", "put", "patch", "delete"] as const;

  for (const [path, pathItem] of Object.entries(spec.paths)) {
    for (const method of methods) {
      const op = pathItem[method] as OperationObject | undefined;
      if (!op?.operationId) continue;

      const tag = op.tags?.[0] ?? "Other";
      const toolName = operationIdToToolName(op.operationId);
      const allParams = op.parameters ?? [];
      const pathParams = allParams.filter((p) => p.in === "path");
      const queryParams = allParams.filter((p) => p.in === "query");

      let hasBody = false;
      let bodySchema: SchemaObject | undefined;
      let bodyRequired: boolean | undefined;
      if (op.requestBody?.content?.["application/json"]?.schema) {
        hasBody = true;
        bodySchema = op.requestBody.content["application/json"].schema;
        bodyRequired = op.requestBody.required;
      }

      operations.push({
        operationId: op.operationId,
        toolName,
        method: method.toUpperCase(),
        path,
        summary: op.summary ?? "",
        description: op.description ?? op.summary ?? toolName,
        tag,
        pathParams,
        queryParams,
        hasBody,
        bodySchema,
        bodyRequired,
      });
    }
  }

  return operations;
}

// ── Code Generation ────────────────────────────────────────────────

function generateResourceFile(
  tag: string,
  fileName: string,
  ops: ParsedOperation[],
  spec: OpenApiSpec
): string {
  const lines: string[] = [
    `// AUTO-GENERATED — do not edit by hand.`,
    `// Generated from spec/public-api.json`,
    ``,
    `import { apiRequest } from "../lib/api-client.js";`,
    `import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";`,
    ``,
  ];

  // Tool definitions array
  lines.push(`const definitions: ToolDefinition[] = [`);
  for (const op of ops) {
    const { properties, required } = buildInputSchema(op, spec);
    const desc = (op.summary || op.description).replace(/"/g, '\\"');
    lines.push(`  {`);
    lines.push(`    name: "${op.toolName}",`);
    lines.push(`    description: "${desc}",`);
    lines.push(`    inputSchema: {`);
    lines.push(`      type: "object",`);
    lines.push(
      `      properties: ${JSON.stringify(properties, null, 6).replace(/\n/g, "\n      ")},`
    );
    if (required.length > 0) {
      lines.push(`      required: ${JSON.stringify(required)},`);
    }
    lines.push(`    },`);
    lines.push(`  },`);
  }
  lines.push(`];`);
  lines.push(``);

  // Handler functions
  lines.push(`const handlers: Record<string, ToolHandler> = {`);
  for (const op of ops) {
    const { properties } = buildInputSchema(op, spec);
    const pathParamNames = op.pathParams.map((p) => p.name);
    const queryParamNames = op.queryParams.map((p) => p.name);
    const allParamNames = [...pathParamNames, ...queryParamNames];
    const bodyPropNames = Object.keys(properties).filter(
      (k) => !allParamNames.includes(k)
    );

    lines.push(`  async ${op.toolName}(args) {`);
    lines.push(`    try {`);

    // Build pathParams
    if (pathParamNames.length > 0) {
      lines.push(
        `      const pathParams: Record<string, string> = {`
      );
      for (const name of pathParamNames) {
        lines.push(`        ${name}: String(args.${name}),`);
      }
      lines.push(`      };`);
    }

    // Build query params
    if (queryParamNames.length > 0) {
      lines.push(
        `      const params: Record<string, unknown> = {};`
      );
      for (const name of queryParamNames) {
        lines.push(
          `      if (args.${name} !== undefined) params.${name} = args.${name};`
        );
      }
    }

    // Build body
    if (op.hasBody && bodyPropNames.length > 0) {
      if (bodyPropNames.length === 1 && bodyPropNames[0] === "body") {
        lines.push(
          `      const body = args.body;`
        );
      } else {
        lines.push(
          `      const body: Record<string, unknown> = {};`
        );
        for (const name of bodyPropNames) {
          lines.push(
            `      if (args.${name} !== undefined) body.${name} = args.${name};`
          );
        }
      }
    }

    // Make the API call
    const apiCallArgs: string[] = [];
    if (pathParamNames.length > 0) apiCallArgs.push("pathParams");
    if (queryParamNames.length > 0) apiCallArgs.push("params");
    if (op.hasBody && bodyPropNames.length > 0) apiCallArgs.push("body");

    const optionsStr =
      apiCallArgs.length > 0
        ? `, { ${apiCallArgs.join(", ")} }`
        : "";
    lines.push(
      `      const result = await apiRequest("${op.method}", "${op.path}"${optionsStr});`
    );

    lines.push(`      return {`);
    lines.push(`        content: [{`);
    lines.push(`          type: "text" as const,`);
    lines.push(
      `          text: JSON.stringify(result.data, null, 2),`
    );
    lines.push(`        }],`);
    lines.push(`      };`);
    lines.push(`    } catch (error) {`);
    lines.push(`      return {`);
    lines.push(`        content: [{`);
    lines.push(`          type: "text" as const,`);
    lines.push(
      `          text: \`Error: \${error instanceof Error ? error.message : String(error)}\`,`
    );
    lines.push(`        }],`);
    lines.push(`      };`);
    lines.push(`    }`);
    lines.push(`  },`);
  }
  lines.push(`};`);
  lines.push(``);

  // Export module
  lines.push(
    `const ${fileName}Tools: ToolModule = { definitions, handlers };`
  );
  lines.push(`export default ${fileName}Tools;`);
  lines.push(``);

  return lines.join("\n");
}

function generateIndexFile(fileNames: string[]): string {
  const lines: string[] = [
    `// AUTO-GENERATED — do not edit by hand.`,
    `// Generated from spec/public-api.json`,
    ``,
    `import type { ToolDefinition, ToolHandler } from "../lib/types.js";`,
    ``,
  ];

  // Imports
  for (const name of fileNames) {
    const camelName = name.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    lines.push(`import ${camelName}Tools from "./${name}.js";`);
  }
  lines.push(``);

  // Combine
  const moduleNames = fileNames.map((name) =>
    name.replace(/_([a-z])/g, (_, c) => c.toUpperCase()) + "Tools"
  );

  lines.push(`const allModules = [`);
  for (const m of moduleNames) {
    lines.push(`  ${m},`);
  }
  lines.push(`];`);
  lines.push(``);

  lines.push(
    `export const toolDefinitions: ToolDefinition[] = allModules.flatMap((m) => m.definitions);`
  );
  lines.push(``);

  lines.push(
    `const handlerMap: Record<string, ToolHandler> = {};`
  );
  lines.push(`for (const m of allModules) {`);
  lines.push(`  Object.assign(handlerMap, m.handlers);`);
  lines.push(`}`);
  lines.push(``);

  lines.push(`export async function handleToolCall(`);
  lines.push(`  name: string,`);
  lines.push(`  args: Record<string, unknown>`);
  lines.push(
    `): Promise<{ content: Array<{ type: "text"; text: string }> }> {`
  );
  lines.push(`  const handler = handlerMap[name];`);
  lines.push(`  if (!handler) {`);
  lines.push(`    return {`);
  lines.push(`      content: [{ type: "text", text: \`Unknown tool: \${name}\` }],`);
  lines.push(`    };`);
  lines.push(`  }`);
  lines.push(`  return handler(args);`);
  lines.push(`}`);
  lines.push(``);

  return lines.join("\n");
}

// ── Main ───────────────────────────────────────────────────────────

function main() {
  console.log("Reading spec from", SPEC_PATH);
  const spec = JSON.parse(readFileSync(SPEC_PATH, "utf-8")) as OpenApiSpec;

  const operations = parseOperations(spec);
  console.log(`Found ${operations.length} operations`);

  // Group by tag
  const byTag = new Map<string, ParsedOperation[]>();
  for (const op of operations) {
    const existing = byTag.get(op.tag) ?? [];
    existing.push(op);
    byTag.set(op.tag, existing);
  }

  mkdirSync(TOOLS_DIR, { recursive: true });

  const fileNames: string[] = [];

  for (const [tag, ops] of byTag.entries()) {
    const fileName = tagToFileName(tag);
    fileNames.push(fileName);

    const content = generateResourceFile(tag, fileName, ops, spec);
    const filePath = join(TOOLS_DIR, `${fileName}.ts`);
    writeFileSync(filePath, content);
    console.log(`  ✓ ${fileName}.ts (${ops.length} tools: ${ops.map((o) => o.toolName).join(", ")})`);
  }

  // Sort for stable output
  fileNames.sort();

  // Generate index
  const indexContent = generateIndexFile(fileNames);
  writeFileSync(join(TOOLS_DIR, "index.ts"), indexContent);
  console.log(`  ✓ index.ts (aggregates ${fileNames.length} resource modules)`);

  console.log(`\nDone! Generated ${operations.length} tools across ${fileNames.length} resource files.`);
}

main();

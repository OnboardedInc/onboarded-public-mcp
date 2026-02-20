/**
 * Shared types for MCP tool definitions and handlers.
 */

export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
}

export type ToolHandler = (
  args: Record<string, unknown>
) => Promise<{ content: Array<{ type: "text"; text: string }> }>;

export interface ToolModule {
  definitions: ToolDefinition[];
  handlers: Record<string, ToolHandler>;
}

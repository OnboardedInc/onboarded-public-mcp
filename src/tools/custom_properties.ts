// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "custom_properties_list",
    description: "List all custom properties",
    inputSchema: {
      type: "object",
      properties: {
            "page": {
                  "type": "string",
                  "description": "between(1, 1000)"
            },
            "per_page": {
                  "type": "string",
                  "description": "between(1, 100)"
            },
            "name": {
                  "type": "string"
            },
            "entity_type": {
                  "type": "string",
                  "enum": [
                        "employee",
                        "employer",
                        "placement",
                        "form",
                        "client",
                        "job"
                  ]
            },
            "path": {
                  "type": "string"
            },
            "status": {
                  "type": "string",
                  "enum": [
                        "active",
                        "deprecated"
                  ]
            }
      },
    },
  },
  {
    name: "custom_properties_create",
    description: "Create a custom property",
    inputSchema: {
      type: "object",
      properties: {
            "name": {
                  "type": "string"
            },
            "label": {
                  "type": "string"
            },
            "entity_type": {
                  "type": "string",
                  "enum": [
                        "employee",
                        "employer",
                        "placement",
                        "form",
                        "client",
                        "job"
                  ]
            },
            "scalar_type": {
                  "type": "string",
                  "enum": [
                        "string",
                        "boolean",
                        "date",
                        "datetime",
                        "integer",
                        "decimal",
                        "address"
                  ]
            }
      },
      required: ["name","label","entity_type","scalar_type"],
    },
  },
  {
    name: "custom_properties_find_by_id",
    description: "Get a custom property by ID",
    inputSchema: {
      type: "object",
      properties: {
            "custom_property_id": {
                  "type": "string",
                  "description": "custom_property_id path parameter"
            }
      },
      required: ["custom_property_id"],
    },
  },
  {
    name: "custom_properties_delete_by_id",
    description: "Delete a custom property",
    inputSchema: {
      type: "object",
      properties: {
            "custom_property_id": {
                  "type": "string",
                  "description": "custom_property_id path parameter"
            }
      },
      required: ["custom_property_id"],
    },
  },
  {
    name: "custom_properties_deprecate_by_id",
    description: "Deprecate a custom property",
    inputSchema: {
      type: "object",
      properties: {
            "custom_property_id": {
                  "type": "string",
                  "description": "custom_property_id path parameter"
            }
      },
      required: ["custom_property_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async custom_properties_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.name !== undefined) params.name = args.name;
      if (args.entity_type !== undefined) params.entity_type = args.entity_type;
      if (args.path !== undefined) params.path = args.path;
      if (args.status !== undefined) params.status = args.status;
      const result = await apiRequest("GET", "/api/v1/custom_properties", { params });
      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(result.data, null, 2),
        }],
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        }],
      };
    }
  },
  async custom_properties_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.label !== undefined) body.label = args.label;
      if (args.entity_type !== undefined) body.entity_type = args.entity_type;
      if (args.scalar_type !== undefined) body.scalar_type = args.scalar_type;
      const result = await apiRequest("POST", "/api/v1/custom_properties", { body });
      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(result.data, null, 2),
        }],
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        }],
      };
    }
  },
  async custom_properties_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        custom_property_id: String(args.custom_property_id),
      };
      const result = await apiRequest("GET", "/api/v1/custom_properties/{custom_property_id}", { pathParams });
      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(result.data, null, 2),
        }],
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        }],
      };
    }
  },
  async custom_properties_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        custom_property_id: String(args.custom_property_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/custom_properties/{custom_property_id}", { pathParams });
      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(result.data, null, 2),
        }],
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        }],
      };
    }
  },
  async custom_properties_deprecate_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        custom_property_id: String(args.custom_property_id),
      };
      const result = await apiRequest("POST", "/api/v1/custom_properties/{custom_property_id}/deprecate", { pathParams });
      return {
        content: [{
          type: "text" as const,
          text: JSON.stringify(result.data, null, 2),
        }],
      };
    } catch (error) {
      return {
        content: [{
          type: "text" as const,
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        }],
      };
    }
  },
};

const custom_propertiesTools: ToolModule = { definitions, handlers };
export default custom_propertiesTools;

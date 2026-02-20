// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "clients_list",
    description: "List all clients",
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
            "custom_attributes": {
                  "type": "string"
            }
      },
    },
  },
  {
    name: "clients_create",
    description: "Create a new client",
    inputSchema: {
      type: "object",
      properties: {
            "name": {
                  "type": "string"
            },
            "custom_attributes": {
                  "type": "object",
                  "description": "Record of custom attribute values keyed by string path.",
                  "properties": {},
                  "required": []
            }
      },
      required: ["name"],
    },
  },
  {
    name: "clients_find_by_id",
    description: "Get a client by ID",
    inputSchema: {
      type: "object",
      properties: {
            "client_id": {
                  "type": "string",
                  "description": "client_id path parameter"
            }
      },
      required: ["client_id"],
    },
  },
  {
    name: "clients_update_by_id",
    description: "Update a client",
    inputSchema: {
      type: "object",
      properties: {
            "client_id": {
                  "type": "string",
                  "description": "client_id path parameter"
            },
            "name": {
                  "type": "string"
            },
            "custom_attributes": {
                  "type": "object",
                  "description": "Record of custom attribute values keyed by string path.",
                  "properties": {},
                  "required": []
            }
      },
      required: ["client_id"],
    },
  },
  {
    name: "clients_delete_by_id",
    description: "Delete a client",
    inputSchema: {
      type: "object",
      properties: {
            "client_id": {
                  "type": "string",
                  "description": "client_id path parameter"
            }
      },
      required: ["client_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async clients_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.custom_attributes !== undefined) params.custom_attributes = args.custom_attributes;
      const result = await apiRequest("GET", "/api/v1/clients", { params });
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
  async clients_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      const result = await apiRequest("POST", "/api/v1/clients", { body });
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
  async clients_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        client_id: String(args.client_id),
      };
      const result = await apiRequest("GET", "/api/v1/clients/{client_id}", { pathParams });
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
  async clients_update_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        client_id: String(args.client_id),
      };
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      const result = await apiRequest("PATCH", "/api/v1/clients/{client_id}", { pathParams, body });
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
  async clients_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        client_id: String(args.client_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/clients/{client_id}", { pathParams });
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

const clientsTools: ToolModule = { definitions, handlers };
export default clientsTools;

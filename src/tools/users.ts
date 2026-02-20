// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "users_list",
    description: "List all users",
    inputSchema: {
      type: "object",
      properties: {
            "email": {
                  "type": "string"
            },
            "external_id": {
                  "type": "string"
            },
            "page": {
                  "type": "string",
                  "description": "a string to be decoded into a number"
            },
            "per_page": {
                  "type": "string",
                  "description": "a string to be decoded into a number"
            }
      },
    },
  },
  {
    name: "users_create",
    description: "Create a new user",
    inputSchema: {
      type: "object",
      properties: {
            "email": {
                  "type": "string"
            },
            "password": {
                  "type": "string",
                  "description": "Password must be at least 8 characters and contain uppercase, lowercase, and numbers."
            },
            "email_verified": {
                  "type": "boolean"
            },
            "user_group_ids": {
                  "type": "array",
                  "items": {
                        "type": "string"
                  }
            },
            "external_id": {
                  "type": "string",
                  "description": "Optional field to store a customer-provided identifier for the user. Onboarded does not validate uniqueness of this field. Customers who intend to use this field with magic links should ensure this field holds unique values."
            }
      },
      required: ["email","user_group_ids"],
    },
  },
  {
    name: "users_find_by_id",
    description: "Get a user by ID",
    inputSchema: {
      type: "object",
      properties: {
            "user_id": {
                  "type": "string",
                  "description": "user_id path parameter"
            }
      },
      required: ["user_id"],
    },
  },
  {
    name: "users_delete_by_id",
    description: "Delete a user",
    inputSchema: {
      type: "object",
      properties: {
            "user_id": {
                  "type": "string",
                  "description": "user_id path parameter"
            }
      },
      required: ["user_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async users_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.email !== undefined) params.email = args.email;
      if (args.external_id !== undefined) params.external_id = args.external_id;
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      const result = await apiRequest("GET", "/api/v1/users", { params });
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
  async users_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.email !== undefined) body.email = args.email;
      if (args.password !== undefined) body.password = args.password;
      if (args.email_verified !== undefined) body.email_verified = args.email_verified;
      if (args.user_group_ids !== undefined) body.user_group_ids = args.user_group_ids;
      if (args.external_id !== undefined) body.external_id = args.external_id;
      const result = await apiRequest("POST", "/api/v1/users", { body });
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
  async users_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        user_id: String(args.user_id),
      };
      const result = await apiRequest("GET", "/api/v1/users/{user_id}", { pathParams });
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
  async users_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        user_id: String(args.user_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/users/{user_id}", { pathParams });
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

const usersTools: ToolModule = { definitions, handlers };
export default usersTools;

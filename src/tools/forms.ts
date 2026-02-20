// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "forms_list",
    description: "List all forms",
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
            "tags": {
                  "type": "string"
            }
      },
    },
  },
  {
    name: "forms_find_by_id",
    description: "Get a form by ID",
    inputSchema: {
      type: "object",
      properties: {
            "form_id": {
                  "type": "string",
                  "description": "form_id path parameter"
            }
      },
      required: ["form_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async forms_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.name !== undefined) params.name = args.name;
      if (args.tags !== undefined) params.tags = args.tags;
      const result = await apiRequest("GET", "/api/v1/forms", { params });
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
  async forms_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        form_id: String(args.form_id),
      };
      const result = await apiRequest("GET", "/api/v1/forms/{form_id}", { pathParams });
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

const formsTools: ToolModule = { definitions, handlers };
export default formsTools;

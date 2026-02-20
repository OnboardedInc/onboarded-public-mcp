// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "components_create_url",
    description: "Create a component URL",
    inputSchema: {
      type: "object",
      properties: {
            "component": {
                  "type": "string",
                  "enum": [
                        "employees/list",
                        "everify/cases",
                        "employee/tasks"
                  ]
            },
            "options": {
                  "type": "object",
                  "properties": {
                        "employee/tasks": {
                              "type": "object",
                              "properties": {
                                    "employee_id": {
                                          "type": "string",
                                          "description": "Employee Identifier"
                                    }
                              },
                              "required": [
                                    "employee_id"
                              ]
                        }
                  },
                  "required": [
                        "employee/tasks"
                  ]
            }
      },
      required: ["component"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async components_create_url(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.component !== undefined) body.component = args.component;
      if (args.options !== undefined) body.options = args.options;
      const result = await apiRequest("POST", "/api/v1/components/create_url", { body });
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

const componentsTools: ToolModule = { definitions, handlers };
export default componentsTools;

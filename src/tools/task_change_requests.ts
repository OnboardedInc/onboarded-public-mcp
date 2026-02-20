// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "task_change_requests_create",
    description: "Create a task change request",
    inputSchema: {
      type: "object",
      properties: {
            "task_id": {
                  "type": "string",
                  "description": "task_id path parameter"
            },
            "starting_section_id": {
                  "type": "string"
            }
      },
      required: ["task_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async task_change_requests_create(args) {
    try {
      const pathParams: Record<string, string> = {
        task_id: String(args.task_id),
      };
      const body: Record<string, unknown> = {};
      if (args.starting_section_id !== undefined) body.starting_section_id = args.starting_section_id;
      const result = await apiRequest("POST", "/api/v1/tasks/{task_id}/task_change_requests", { pathParams, body });
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

const task_change_requestsTools: ToolModule = { definitions, handlers };
export default task_change_requestsTools;

// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "subtasks_find_by_id",
    description: "Get a subtask by ID",
    inputSchema: {
      type: "object",
      properties: {
            "subtask_id": {
                  "type": "string",
                  "description": "subtask_id path parameter"
            }
      },
      required: ["subtask_id"],
    },
  },
  {
    name: "subtasks_upload_files",
    description: "Upload files to a subtask",
    inputSchema: {
      type: "object",
      properties: {
            "subtask_id": {
                  "type": "string",
                  "description": "subtask_id path parameter"
            }
      },
      required: ["subtask_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async subtasks_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        subtask_id: String(args.subtask_id),
      };
      const result = await apiRequest("GET", "/api/v1/subtasks/{subtask_id}", { pathParams });
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
  async subtasks_upload_files(args) {
    try {
      const pathParams: Record<string, string> = {
        subtask_id: String(args.subtask_id),
      };
      const result = await apiRequest("POST", "/api/v1/subtasks/{subtask_id}/upload", { pathParams });
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

const subtasksTools: ToolModule = { definitions, handlers };
export default subtasksTools;

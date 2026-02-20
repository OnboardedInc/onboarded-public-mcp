// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "files_find_by_id",
    description: "Get a file by ID",
    inputSchema: {
      type: "object",
      properties: {
            "file_id": {
                  "type": "string",
                  "description": "file_id path parameter"
            }
      },
      required: ["file_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async files_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        file_id: String(args.file_id),
      };
      const result = await apiRequest("GET", "/api/v1/files/{file_id}", { pathParams });
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

const filesTools: ToolModule = { definitions, handlers };
export default filesTools;

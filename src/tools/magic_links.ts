// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "magic_links_create",
    description: "Create a magic link",
    inputSchema: {
      type: "object",
      properties: {
            "user_email": {
                  "type": "string",
                  "format": "email"
            },
            "user_external_id": {
                  "type": "string",
                  "description": "Custom identifier provided upon user creation. Can be provided with or without user_email. If user_email is omitted, however, this field must uniquely identify a user. An error will be returned if multiple users hold the same external_id."
            },
            "expire_in": {
                  "type": "integer",
                  "description": "a number between 1 and 86400"
            },
            "redirect_path": {
                  "type": "string",
                  "description": "Optional redirect path within the dashboard (must be a relative path starting with '/' and cannot contain external URLs). Examples: /dashboard, /employees/ee_123"
            }
      },
      required: ["expire_in"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async magic_links_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.user_email !== undefined) body.user_email = args.user_email;
      if (args.user_external_id !== undefined) body.user_external_id = args.user_external_id;
      if (args.expire_in !== undefined) body.expire_in = args.expire_in;
      if (args.redirect_path !== undefined) body.redirect_path = args.redirect_path;
      const result = await apiRequest("POST", "/api/v1/magic_links", { body });
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

const magic_linksTools: ToolModule = { definitions, handlers };
export default magic_linksTools;

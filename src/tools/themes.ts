// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "themes_list",
    description: "List all themes",
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
            }
      },
    },
  },
  {
    name: "themes_create",
    description: "Create a new theme",
    inputSchema: {
      type: "object",
      properties: {
            "name": {
                  "type": "string",
                  "description": "a non empty string"
            },
            "light": {
                  "type": "object",
                  "properties": {
                        "logo": {
                              "type": "string"
                        },
                        "show_header": {
                              "type": "boolean"
                        },
                        "show_form_name": {
                              "type": "boolean"
                        },
                        "show_updated_fields_count": {
                              "type": "boolean"
                        },
                        "next_button_text": {
                              "type": "string"
                        },
                        "back_button_text": {
                              "type": "string"
                        },
                        "custom_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "custom_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "primary_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "primary_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "secondary_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "secondary_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "progress": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "border": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "radius": {
                              "type": "string"
                        }
                  },
                  "required": []
            },
            "dark": {
                  "type": "object",
                  "properties": {
                        "logo": {
                              "type": "string"
                        },
                        "show_header": {
                              "type": "boolean"
                        },
                        "show_form_name": {
                              "type": "boolean"
                        },
                        "show_updated_fields_count": {
                              "type": "boolean"
                        },
                        "next_button_text": {
                              "type": "string"
                        },
                        "back_button_text": {
                              "type": "string"
                        },
                        "custom_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "custom_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "primary_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "primary_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "secondary_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "secondary_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "progress": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "border": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "radius": {
                              "type": "string"
                        }
                  },
                  "required": []
            }
      },
      required: ["name"],
    },
  },
  {
    name: "themes_find_by_id",
    description: "Get a theme by ID",
    inputSchema: {
      type: "object",
      properties: {
            "theme_id": {
                  "type": "string",
                  "description": "theme_id path parameter"
            }
      },
      required: ["theme_id"],
    },
  },
  {
    name: "themes_update_by_id",
    description: "Update a theme",
    inputSchema: {
      type: "object",
      properties: {
            "theme_id": {
                  "type": "string",
                  "description": "theme_id path parameter"
            },
            "name": {
                  "type": "string",
                  "description": "a non empty string"
            },
            "light": {
                  "type": "object",
                  "properties": {
                        "logo": {
                              "type": "string"
                        },
                        "show_header": {
                              "type": "boolean"
                        },
                        "show_form_name": {
                              "type": "boolean"
                        },
                        "show_updated_fields_count": {
                              "type": "boolean"
                        },
                        "next_button_text": {
                              "type": "string"
                        },
                        "back_button_text": {
                              "type": "string"
                        },
                        "custom_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "custom_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "primary_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "primary_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "secondary_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "secondary_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "progress": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "border": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "radius": {
                              "type": "string"
                        }
                  },
                  "required": []
            },
            "dark": {
                  "type": "object",
                  "properties": {
                        "logo": {
                              "type": "string"
                        },
                        "show_header": {
                              "type": "boolean"
                        },
                        "show_form_name": {
                              "type": "boolean"
                        },
                        "show_updated_fields_count": {
                              "type": "boolean"
                        },
                        "next_button_text": {
                              "type": "string"
                        },
                        "back_button_text": {
                              "type": "string"
                        },
                        "custom_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "custom_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "primary_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "primary_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "secondary_background": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "secondary_foreground": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "progress": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "border": {
                              "type": "string",
                              "description": "Hex Theme Color (must be a valid hex code like #FFF or #FFFFFF)"
                        },
                        "radius": {
                              "type": "string"
                        }
                  },
                  "required": []
            }
      },
      required: ["theme_id"],
    },
  },
  {
    name: "themes_delete_by_id",
    description: "Delete a theme",
    inputSchema: {
      type: "object",
      properties: {
            "theme_id": {
                  "type": "string",
                  "description": "theme_id path parameter"
            }
      },
      required: ["theme_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async themes_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.name !== undefined) params.name = args.name;
      const result = await apiRequest("GET", "/api/v1/themes", { params });
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
  async themes_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.light !== undefined) body.light = args.light;
      if (args.dark !== undefined) body.dark = args.dark;
      const result = await apiRequest("POST", "/api/v1/themes", { body });
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
  async themes_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        theme_id: String(args.theme_id),
      };
      const result = await apiRequest("GET", "/api/v1/themes/{theme_id}", { pathParams });
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
  async themes_update_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        theme_id: String(args.theme_id),
      };
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.light !== undefined) body.light = args.light;
      if (args.dark !== undefined) body.dark = args.dark;
      const result = await apiRequest("PATCH", "/api/v1/themes/{theme_id}", { pathParams, body });
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
  async themes_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        theme_id: String(args.theme_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/themes/{theme_id}", { pathParams });
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

const themesTools: ToolModule = { definitions, handlers };
export default themesTools;

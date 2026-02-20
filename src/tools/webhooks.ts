// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "webhooks_list",
    description: "List all webhooks",
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
            }
      },
    },
  },
  {
    name: "webhooks_create",
    description: "Create a new webhook",
    inputSchema: {
      type: "object",
      properties: {
            "url": {
                  "type": "string"
            },
            "description": {
                  "type": "string"
            },
            "subscribed_events": {
                  "type": "array",
                  "items": {
                        "type": "string",
                        "enum": [
                              "employee.created",
                              "employee.updated",
                              "employee.deleted",
                              "employer.created",
                              "employer.updated",
                              "employer.deleted",
                              "client.created",
                              "client.updated",
                              "client.deleted",
                              "job.created",
                              "job.updated",
                              "job.deleted",
                              "task.created",
                              "task.updated",
                              "task.deleted",
                              "task.form_pdf_generated",
                              "placement.created",
                              "placement.updated",
                              "placement.deleted"
                        ]
                  }
            }
      },
      required: ["url"],
    },
  },
  {
    name: "webhooks_find_by_id",
    description: "Get a webhook by ID",
    inputSchema: {
      type: "object",
      properties: {
            "webhook_id": {
                  "type": "string",
                  "description": "webhook_id path parameter"
            }
      },
      required: ["webhook_id"],
    },
  },
  {
    name: "webhooks_update_by_id",
    description: "Update a webhook",
    inputSchema: {
      type: "object",
      properties: {
            "webhook_id": {
                  "type": "string",
                  "description": "webhook_id path parameter"
            },
            "description": {
                  "type": "string"
            },
            "subscribed_events": {
                  "type": "array",
                  "items": {
                        "type": "string",
                        "enum": [
                              "employee.created",
                              "employee.updated",
                              "employee.deleted",
                              "employer.created",
                              "employer.updated",
                              "employer.deleted",
                              "client.created",
                              "client.updated",
                              "client.deleted",
                              "job.created",
                              "job.updated",
                              "job.deleted",
                              "task.created",
                              "task.updated",
                              "task.deleted",
                              "task.form_pdf_generated",
                              "placement.created",
                              "placement.updated",
                              "placement.deleted"
                        ]
                  }
            }
      },
      required: ["webhook_id"],
    },
  },
  {
    name: "webhooks_delete_by_id",
    description: "Delete a webhook",
    inputSchema: {
      type: "object",
      properties: {
            "webhook_id": {
                  "type": "string",
                  "description": "webhook_id path parameter"
            }
      },
      required: ["webhook_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async webhooks_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      const result = await apiRequest("GET", "/api/v1/webhooks", { params });
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
  async webhooks_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.url !== undefined) body.url = args.url;
      if (args.description !== undefined) body.description = args.description;
      if (args.subscribed_events !== undefined) body.subscribed_events = args.subscribed_events;
      const result = await apiRequest("POST", "/api/v1/webhooks", { body });
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
  async webhooks_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        webhook_id: String(args.webhook_id),
      };
      const result = await apiRequest("GET", "/api/v1/webhooks/{webhook_id}", { pathParams });
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
  async webhooks_update_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        webhook_id: String(args.webhook_id),
      };
      const body: Record<string, unknown> = {};
      if (args.description !== undefined) body.description = args.description;
      if (args.subscribed_events !== undefined) body.subscribed_events = args.subscribed_events;
      const result = await apiRequest("PATCH", "/api/v1/webhooks/{webhook_id}", { pathParams, body });
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
  async webhooks_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        webhook_id: String(args.webhook_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/webhooks/{webhook_id}", { pathParams });
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

const webhooksTools: ToolModule = { definitions, handlers };
export default webhooksTools;

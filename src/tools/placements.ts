// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "placements_list",
    description: "List all placements",
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
            "employee_id": {
                  "type": "string",
                  "description": "Employee Identifier"
            },
            "employer_id": {
                  "type": "string",
                  "description": "Employer Identifier"
            },
            "client_id": {
                  "type": "string",
                  "description": "Client Identifier"
            },
            "job_id": {
                  "type": "string",
                  "description": "Job Identifier"
            }
      },
    },
  },
  {
    name: "placements_create",
    description: "Create a new placement",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "Employee Identifier"
            },
            "employer_id": {
                  "type": "string",
                  "description": "Employer Identifier"
            },
            "client_id": {
                  "type": "string",
                  "description": "Client Identifier"
            },
            "job_id": {
                  "type": "string",
                  "description": "Job Identifier"
            },
            "custom_attributes": {
                  "type": "object",
                  "description": "Record of custom attribute values keyed by string path.",
                  "properties": {},
                  "required": []
            },
            "create_tasks": {
                  "type": "boolean"
            }
      },
      required: ["employee_id"],
    },
  },
  {
    name: "placements_find_by_id",
    description: "Get a placement by ID",
    inputSchema: {
      type: "object",
      properties: {
            "placement_id": {
                  "type": "string",
                  "description": "placement_id path parameter"
            }
      },
      required: ["placement_id"],
    },
  },
  {
    name: "placements_update_by_id",
    description: "Update a placement",
    inputSchema: {
      type: "object",
      properties: {
            "placement_id": {
                  "type": "string",
                  "description": "placement_id path parameter"
            },
            "custom_attributes": {
                  "type": "object",
                  "description": "Record of custom attribute values keyed by string path.",
                  "properties": {},
                  "required": []
            },
            "create_tasks": {
                  "type": "boolean"
            }
      },
      required: ["placement_id"],
    },
  },
  {
    name: "placements_delete_by_id",
    description: "Delete a placement",
    inputSchema: {
      type: "object",
      properties: {
            "placement_id": {
                  "type": "string",
                  "description": "placement_id path parameter"
            }
      },
      required: ["placement_id"],
    },
  },
  {
    name: "placements_preview_deprecated",
    description: "DEPRECATED: Use POST /placements/preview instead",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "Employee Identifier"
            },
            "employer_id": {
                  "type": "string",
                  "description": "Employer Identifier"
            },
            "client_id": {
                  "type": "string",
                  "description": "Client Identifier"
            },
            "job_id": {
                  "type": "string",
                  "description": "Job Identifier"
            }
      },
      required: ["employee_id"],
    },
  },
  {
    name: "placements_preview",
    description: "Generate a transient placement to preview form requirements without creating it",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "Employee Identifier"
            },
            "employer_id": {
                  "type": "string",
                  "description": "Employer Identifier"
            },
            "client_id": {
                  "type": "string",
                  "description": "Client Identifier"
            },
            "job_id": {
                  "type": "string",
                  "description": "Job Identifier"
            },
            "custom_attributes": {
                  "type": "object",
                  "description": "Record of custom attribute values keyed by string path.",
                  "properties": {},
                  "required": []
            }
      },
      required: ["employee_id"],
    },
  },
  {
    name: "placements_preview_tasks",
    description: "DEPRECATED: Use POST /placements/preview instead",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "Employee Identifier"
            },
            "employer_id": {
                  "type": "string",
                  "description": "Employer Identifier"
            },
            "client_id": {
                  "type": "string",
                  "description": "Client Identifier"
            },
            "job_id": {
                  "type": "string",
                  "description": "Job Identifier"
            }
      },
      required: ["employee_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async placements_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.employee_id !== undefined) params.employee_id = args.employee_id;
      if (args.employer_id !== undefined) params.employer_id = args.employer_id;
      if (args.client_id !== undefined) params.client_id = args.client_id;
      if (args.job_id !== undefined) params.job_id = args.job_id;
      const result = await apiRequest("GET", "/api/v1/placements", { params });
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
  async placements_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.employee_id !== undefined) body.employee_id = args.employee_id;
      if (args.employer_id !== undefined) body.employer_id = args.employer_id;
      if (args.client_id !== undefined) body.client_id = args.client_id;
      if (args.job_id !== undefined) body.job_id = args.job_id;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      if (args.create_tasks !== undefined) body.create_tasks = args.create_tasks;
      const result = await apiRequest("POST", "/api/v1/placements", { body });
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
  async placements_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        placement_id: String(args.placement_id),
      };
      const result = await apiRequest("GET", "/api/v1/placements/{placement_id}", { pathParams });
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
  async placements_update_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        placement_id: String(args.placement_id),
      };
      const body: Record<string, unknown> = {};
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      if (args.create_tasks !== undefined) body.create_tasks = args.create_tasks;
      const result = await apiRequest("PATCH", "/api/v1/placements/{placement_id}", { pathParams, body });
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
  async placements_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        placement_id: String(args.placement_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/placements/{placement_id}", { pathParams });
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
  async placements_preview_deprecated(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.employee_id !== undefined) params.employee_id = args.employee_id;
      if (args.employer_id !== undefined) params.employer_id = args.employer_id;
      if (args.client_id !== undefined) params.client_id = args.client_id;
      if (args.job_id !== undefined) params.job_id = args.job_id;
      const result = await apiRequest("GET", "/api/v1/placements/preview", { params });
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
  async placements_preview(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.employee_id !== undefined) body.employee_id = args.employee_id;
      if (args.employer_id !== undefined) body.employer_id = args.employer_id;
      if (args.client_id !== undefined) body.client_id = args.client_id;
      if (args.job_id !== undefined) body.job_id = args.job_id;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      const result = await apiRequest("POST", "/api/v1/placements/preview", { body });
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
  async placements_preview_tasks(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.employee_id !== undefined) body.employee_id = args.employee_id;
      if (args.employer_id !== undefined) body.employer_id = args.employer_id;
      if (args.client_id !== undefined) body.client_id = args.client_id;
      if (args.job_id !== undefined) body.job_id = args.job_id;
      const result = await apiRequest("POST", "/api/v1/placements/preview_tasks", { body });
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

const placementsTools: ToolModule = { definitions, handlers };
export default placementsTools;

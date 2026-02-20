// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "tasks_list",
    description: "List all tasks",
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
            "form_id": {
                  "type": "string",
                  "description": "Form Identifier (lineage uid)"
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
            },
            "status": {
                  "type": "string",
                  "enum": [
                        "requires_action",
                        "completed",
                        "expired"
                  ]
            },
            "expired_at_lte": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "expired_at_gte": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "due_at_lte": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "due_at_gte": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "completed_at_lte": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "completed_at_gte": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "created_at_lte": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "created_at_gte": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            }
      },
    },
  },
  {
    name: "tasks_create",
    description: "Create a new task",
    inputSchema: {
      type: "object",
      properties: {
            "allow_duplicate": {
                  "type": "string",
                  "enum": [
                        "true",
                        "false",
                        "True",
                        "False"
                  ]
            },
            "form_id": {
                  "type": "string",
                  "description": "Form Identifier (lineage uid)"
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
            },
            "placement_id": {
                  "type": "string",
                  "description": "Placement Identifier"
            },
            "expired_at": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "due_at": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "deletion_scheduled_at": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "deletion_allowed_at": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            }
      },
      required: ["form_id","employee_id"],
    },
  },
  {
    name: "tasks_find_by_id",
    description: "Get a task by ID",
    inputSchema: {
      type: "object",
      properties: {
            "task_id": {
                  "type": "string",
                  "description": "task_id path parameter"
            }
      },
      required: ["task_id"],
    },
  },
  {
    name: "tasks_update_by_id",
    description: "Update a task",
    inputSchema: {
      type: "object",
      properties: {
            "task_id": {
                  "type": "string",
                  "description": "task_id path parameter"
            },
            "expired_at": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "deletion_scheduled_at": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            },
            "deletion_allowed_at": {
                  "type": "string",
                  "description": "a string to be decoded into a DateTime.Utc"
            }
      },
      required: ["task_id"],
    },
  },
  {
    name: "tasks_delete_by_id",
    description: "Delete a task",
    inputSchema: {
      type: "object",
      properties: {
            "task_id": {
                  "type": "string",
                  "description": "task_id path parameter"
            }
      },
      required: ["task_id"],
    },
  },
  {
    name: "tasks_get_fields",
    description: "Get task fields",
    inputSchema: {
      type: "object",
      properties: {
            "task_id": {
                  "type": "string",
                  "description": "task_id path parameter"
            },
            "include_sensitive_info": {
                  "type": "string",
                  "enum": [
                        "true",
                        "false",
                        "True",
                        "False"
                  ]
            }
      },
      required: ["task_id"],
    },
  },
  {
    name: "tasks_update_fields",
    description: "Update task fields",
    inputSchema: {
      type: "object",
      properties: {
            "task_id": {
                  "type": "string",
                  "description": "task_id path parameter"
            },
            "fields": {
                  "type": "array",
                  "items": {
                        "type": "object",
                        "properties": {
                              "path": {
                                    "type": "string"
                              },
                              "value": {
                                    "description": "The value of the field",
                                    "type": "string"
                              }
                        },
                        "required": [
                              "path",
                              "value"
                        ]
                  }
            }
      },
      required: ["task_id","fields"],
    },
  },
  {
    name: "tasks_get_pdf",
    description: "Download task as PDF",
    inputSchema: {
      type: "object",
      properties: {
            "task_id": {
                  "type": "string",
                  "description": "task_id path parameter"
            }
      },
      required: ["task_id"],
    },
  },
  {
    name: "tasks_get_onboarding_url",
    description: "Get onboarding URL for a task",
    inputSchema: {
      type: "object",
      properties: {
            "task_id": {
                  "type": "string",
                  "description": "task_id path parameter"
            },
            "assignee_type": {
                  "type": "string",
                  "enum": [
                        "employee",
                        "employer"
                  ]
            },
            "locale": {
                  "type": "string"
            },
            "redirect_to": {
                  "type": "string"
            }
      },
      required: ["task_id","assignee_type"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async tasks_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.form_id !== undefined) params.form_id = args.form_id;
      if (args.employee_id !== undefined) params.employee_id = args.employee_id;
      if (args.employer_id !== undefined) params.employer_id = args.employer_id;
      if (args.client_id !== undefined) params.client_id = args.client_id;
      if (args.job_id !== undefined) params.job_id = args.job_id;
      if (args.status !== undefined) params.status = args.status;
      if (args.expired_at_lte !== undefined) params.expired_at_lte = args.expired_at_lte;
      if (args.expired_at_gte !== undefined) params.expired_at_gte = args.expired_at_gte;
      if (args.due_at_lte !== undefined) params.due_at_lte = args.due_at_lte;
      if (args.due_at_gte !== undefined) params.due_at_gte = args.due_at_gte;
      if (args.completed_at_lte !== undefined) params.completed_at_lte = args.completed_at_lte;
      if (args.completed_at_gte !== undefined) params.completed_at_gte = args.completed_at_gte;
      if (args.created_at_lte !== undefined) params.created_at_lte = args.created_at_lte;
      if (args.created_at_gte !== undefined) params.created_at_gte = args.created_at_gte;
      const result = await apiRequest("GET", "/api/v1/tasks", { params });
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
  async tasks_create(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.allow_duplicate !== undefined) params.allow_duplicate = args.allow_duplicate;
      const body: Record<string, unknown> = {};
      if (args.form_id !== undefined) body.form_id = args.form_id;
      if (args.employee_id !== undefined) body.employee_id = args.employee_id;
      if (args.employer_id !== undefined) body.employer_id = args.employer_id;
      if (args.client_id !== undefined) body.client_id = args.client_id;
      if (args.job_id !== undefined) body.job_id = args.job_id;
      if (args.placement_id !== undefined) body.placement_id = args.placement_id;
      if (args.expired_at !== undefined) body.expired_at = args.expired_at;
      if (args.due_at !== undefined) body.due_at = args.due_at;
      if (args.deletion_scheduled_at !== undefined) body.deletion_scheduled_at = args.deletion_scheduled_at;
      if (args.deletion_allowed_at !== undefined) body.deletion_allowed_at = args.deletion_allowed_at;
      const result = await apiRequest("POST", "/api/v1/tasks", { params, body });
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
  async tasks_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        task_id: String(args.task_id),
      };
      const result = await apiRequest("GET", "/api/v1/tasks/{task_id}", { pathParams });
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
  async tasks_update_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        task_id: String(args.task_id),
      };
      const body: Record<string, unknown> = {};
      if (args.expired_at !== undefined) body.expired_at = args.expired_at;
      if (args.deletion_scheduled_at !== undefined) body.deletion_scheduled_at = args.deletion_scheduled_at;
      if (args.deletion_allowed_at !== undefined) body.deletion_allowed_at = args.deletion_allowed_at;
      const result = await apiRequest("PATCH", "/api/v1/tasks/{task_id}", { pathParams, body });
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
  async tasks_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        task_id: String(args.task_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/tasks/{task_id}", { pathParams });
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
  async tasks_get_fields(args) {
    try {
      const pathParams: Record<string, string> = {
        task_id: String(args.task_id),
      };
      const params: Record<string, unknown> = {};
      if (args.include_sensitive_info !== undefined) params.include_sensitive_info = args.include_sensitive_info;
      const result = await apiRequest("GET", "/api/v1/tasks/{task_id}/fields", { pathParams, params });
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
  async tasks_update_fields(args) {
    try {
      const pathParams: Record<string, string> = {
        task_id: String(args.task_id),
      };
      const body: Record<string, unknown> = {};
      if (args.fields !== undefined) body.fields = args.fields;
      const result = await apiRequest("PATCH", "/api/v1/tasks/{task_id}/fields", { pathParams, body });
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
  async tasks_get_pdf(args) {
    try {
      const pathParams: Record<string, string> = {
        task_id: String(args.task_id),
      };
      const result = await apiRequest("GET", "/api/v1/tasks/{task_id}/pdf", { pathParams });
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
  async tasks_get_onboarding_url(args) {
    try {
      const pathParams: Record<string, string> = {
        task_id: String(args.task_id),
      };
      const params: Record<string, unknown> = {};
      if (args.assignee_type !== undefined) params.assignee_type = args.assignee_type;
      if (args.locale !== undefined) params.locale = args.locale;
      if (args.redirect_to !== undefined) params.redirect_to = args.redirect_to;
      const result = await apiRequest("GET", "/api/v1/tasks/{task_id}/onboarding", { pathParams, params });
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

const tasksTools: ToolModule = { definitions, handlers };
export default tasksTools;

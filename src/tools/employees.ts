// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "employees_list",
    description: "List all employees",
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
            "custom_attributes": {
                  "type": "string"
            }
      },
    },
  },
  {
    name: "employees_create",
    description: "Create a new employee",
    inputSchema: {
      type: "object",
      properties: {
            "first_name": {
                  "type": "string"
            },
            "middle_name": {
                  "type": "string"
            },
            "last_name": {
                  "type": "string"
            },
            "email": {
                  "type": "string"
            },
            "phone": {
                  "type": "string"
            },
            "date_of_birth": {
                  "type": "string"
            },
            "social_security_number": {
                  "type": "string"
            },
            "has_middle_name": {
                  "type": "boolean"
            },
            "address": {
                  "type": "object",
                  "description": "An address resource",
                  "properties": {
                        "street": {
                              "type": "string"
                        },
                        "secondary": {
                              "type": "string"
                        },
                        "city": {
                              "type": "string"
                        },
                        "state": {
                              "type": "string"
                        },
                        "zip": {
                              "type": "string"
                        },
                        "country": {
                              "type": "string"
                        },
                        "full_address": {
                              "type": "string"
                        }
                  },
                  "required": [
                        "street",
                        "city",
                        "state",
                        "country"
                  ]
            },
            "custom_attributes": {
                  "type": "object",
                  "description": "Record of custom attribute values keyed by string path.",
                  "properties": {},
                  "required": []
            }
      },
      required: ["first_name","last_name"],
    },
  },
  {
    name: "employees_find_by_id",
    description: "Get an employee by ID",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "employee_id path parameter"
            }
      },
      required: ["employee_id"],
    },
  },
  {
    name: "employees_update_by_id",
    description: "Update an employee",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "employee_id path parameter"
            },
            "first_name": {
                  "type": "string"
            },
            "middle_name": {
                  "type": "string"
            },
            "last_name": {
                  "type": "string"
            },
            "email": {
                  "type": "string"
            },
            "phone": {
                  "type": "string"
            },
            "date_of_birth": {
                  "type": "string"
            },
            "social_security_number": {
                  "type": "string"
            },
            "has_middle_name": {
                  "type": "boolean"
            },
            "address": {
                  "type": "object",
                  "description": "An address resource",
                  "properties": {
                        "street": {
                              "type": "string"
                        },
                        "secondary": {
                              "type": "string"
                        },
                        "city": {
                              "type": "string"
                        },
                        "state": {
                              "type": "string"
                        },
                        "zip": {
                              "type": "string"
                        },
                        "country": {
                              "type": "string"
                        },
                        "full_address": {
                              "type": "string"
                        }
                  },
                  "required": [
                        "street",
                        "city",
                        "state",
                        "country"
                  ]
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
    name: "employees_delete_by_id",
    description: "Delete an employee",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "employee_id path parameter"
            }
      },
      required: ["employee_id"],
    },
  },
  {
    name: "employees_get_onboarding_url",
    description: "Get onboarding URL for an employee",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "employee_id path parameter"
            },
            "assignee_type": {
                  "type": "string",
                  "description": "Type of assignee for onboarding tasks. Defaults to \"employee\".",
                  "enum": [
                        "employee",
                        "employer"
                  ]
            },
            "task_ids": {
                  "type": "string",
                  "description": "Comma-separated list of task IDs"
            },
            "locale": {
                  "type": "string",
                  "description": "Locale code (e.g. en, es, fr). If not provided, the language will be selected automatically based on candidate browser language setting and form language availability."
            },
            "redirect_to": {
                  "type": "string",
                  "description": "Redirect to URL to send the user after onboarding is complete"
            },
            "active_theme_id": {
                  "type": "string",
                  "description": "Custom theme for the onboarding form"
            }
      },
      required: ["employee_id"],
    },
  },
  {
    name: "employees_migrate_task_progress",
    description: "Migrate completed task progress",
    inputSchema: {
      type: "object",
      properties: {
            "employee_id": {
                  "type": "string",
                  "description": "employee_id path parameter"
            },
            "target_employee_id": {
                  "type": "string",
                  "description": "Employee Identifier"
            }
      },
      required: ["employee_id","target_employee_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async employees_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.custom_attributes !== undefined) params.custom_attributes = args.custom_attributes;
      const result = await apiRequest("GET", "/api/v1/employees", { params });
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
  async employees_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.first_name !== undefined) body.first_name = args.first_name;
      if (args.middle_name !== undefined) body.middle_name = args.middle_name;
      if (args.last_name !== undefined) body.last_name = args.last_name;
      if (args.email !== undefined) body.email = args.email;
      if (args.phone !== undefined) body.phone = args.phone;
      if (args.date_of_birth !== undefined) body.date_of_birth = args.date_of_birth;
      if (args.social_security_number !== undefined) body.social_security_number = args.social_security_number;
      if (args.has_middle_name !== undefined) body.has_middle_name = args.has_middle_name;
      if (args.address !== undefined) body.address = args.address;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      const result = await apiRequest("POST", "/api/v1/employees", { body });
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
  async employees_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        employee_id: String(args.employee_id),
      };
      const result = await apiRequest("GET", "/api/v1/employees/{employee_id}", { pathParams });
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
  async employees_update_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        employee_id: String(args.employee_id),
      };
      const body: Record<string, unknown> = {};
      if (args.first_name !== undefined) body.first_name = args.first_name;
      if (args.middle_name !== undefined) body.middle_name = args.middle_name;
      if (args.last_name !== undefined) body.last_name = args.last_name;
      if (args.email !== undefined) body.email = args.email;
      if (args.phone !== undefined) body.phone = args.phone;
      if (args.date_of_birth !== undefined) body.date_of_birth = args.date_of_birth;
      if (args.social_security_number !== undefined) body.social_security_number = args.social_security_number;
      if (args.has_middle_name !== undefined) body.has_middle_name = args.has_middle_name;
      if (args.address !== undefined) body.address = args.address;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      const result = await apiRequest("PATCH", "/api/v1/employees/{employee_id}", { pathParams, body });
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
  async employees_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        employee_id: String(args.employee_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/employees/{employee_id}", { pathParams });
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
  async employees_get_onboarding_url(args) {
    try {
      const pathParams: Record<string, string> = {
        employee_id: String(args.employee_id),
      };
      const params: Record<string, unknown> = {};
      if (args.assignee_type !== undefined) params.assignee_type = args.assignee_type;
      if (args.task_ids !== undefined) params.task_ids = args.task_ids;
      if (args.locale !== undefined) params.locale = args.locale;
      if (args.redirect_to !== undefined) params.redirect_to = args.redirect_to;
      if (args.active_theme_id !== undefined) params.active_theme_id = args.active_theme_id;
      const result = await apiRequest("GET", "/api/v1/employees/{employee_id}/onboarding", { pathParams, params });
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
  async employees_migrate_task_progress(args) {
    try {
      const pathParams: Record<string, string> = {
        employee_id: String(args.employee_id),
      };
      const body: Record<string, unknown> = {};
      if (args.target_employee_id !== undefined) body.target_employee_id = args.target_employee_id;
      const result = await apiRequest("PATCH", "/api/v1/employees/{employee_id}/migrate_completed_tasks_progress", { pathParams, body });
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

const employeesTools: ToolModule = { definitions, handlers };
export default employeesTools;

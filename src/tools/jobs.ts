// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "jobs_list",
    description: "List all jobs",
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
    name: "jobs_create",
    description: "Create a new job",
    inputSchema: {
      type: "object",
      properties: {
            "name": {
                  "type": "string"
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
      required: ["name"],
    },
  },
  {
    name: "jobs_find_by_id",
    description: "Get a job by ID",
    inputSchema: {
      type: "object",
      properties: {
            "job_id": {
                  "type": "string",
                  "description": "job_id path parameter"
            }
      },
      required: ["job_id"],
    },
  },
  {
    name: "jobs_update_by_id",
    description: "Update a job",
    inputSchema: {
      type: "object",
      properties: {
            "job_id": {
                  "type": "string",
                  "description": "job_id path parameter"
            },
            "name": {
                  "type": "string"
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
      required: ["job_id"],
    },
  },
  {
    name: "jobs_delete_by_id",
    description: "Delete a job",
    inputSchema: {
      type: "object",
      properties: {
            "job_id": {
                  "type": "string",
                  "description": "job_id path parameter"
            }
      },
      required: ["job_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async jobs_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.custom_attributes !== undefined) params.custom_attributes = args.custom_attributes;
      const result = await apiRequest("GET", "/api/v1/jobs", { params });
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
  async jobs_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.address !== undefined) body.address = args.address;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      const result = await apiRequest("POST", "/api/v1/jobs", { body });
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
  async jobs_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        job_id: String(args.job_id),
      };
      const result = await apiRequest("GET", "/api/v1/jobs/{job_id}", { pathParams });
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
  async jobs_update_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        job_id: String(args.job_id),
      };
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.address !== undefined) body.address = args.address;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      const result = await apiRequest("PATCH", "/api/v1/jobs/{job_id}", { pathParams, body });
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
  async jobs_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        job_id: String(args.job_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/jobs/{job_id}", { pathParams });
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

const jobsTools: ToolModule = { definitions, handlers };
export default jobsTools;

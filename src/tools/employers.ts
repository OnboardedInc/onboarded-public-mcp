// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import { apiRequest } from "../lib/api-client.js";
import type { ToolDefinition, ToolHandler, ToolModule } from "../lib/types.js";

const definitions: ToolDefinition[] = [
  {
    name: "employers_list",
    description: "List all employers",
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
    name: "employers_create",
    description: "Create a new employer",
    inputSchema: {
      type: "object",
      properties: {
            "name": {
                  "type": "string"
            },
            "ein": {
                  "type": "string"
            },
            "dba_name": {
                  "type": "string"
            },
            "phone": {
                  "type": "string"
            },
            "employee_count": {
                  "type": "number"
            },
            "entity_structure": {
                  "type": "string",
                  "description": "Legal entity structure of the employer",
                  "enum": [
                        "sole_proprietorship",
                        "partnership",
                        "llc",
                        "corporation",
                        "nonprofit",
                        "cooperative",
                        "professional_corporation"
                  ]
            },
            "naics_code": {
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
            },
            "active_theme_id": {
                  "type": "string"
            }
      },
      required: ["name"],
    },
  },
  {
    name: "employers_find_by_id",
    description: "Get an employer by ID",
    inputSchema: {
      type: "object",
      properties: {
            "employer_id": {
                  "type": "string",
                  "description": "employer_id path parameter"
            }
      },
      required: ["employer_id"],
    },
  },
  {
    name: "employers_update_by_id",
    description: "Update an employer",
    inputSchema: {
      type: "object",
      properties: {
            "employer_id": {
                  "type": "string",
                  "description": "employer_id path parameter"
            },
            "name": {
                  "type": "string"
            },
            "ein": {
                  "type": "string"
            },
            "dba_name": {
                  "type": "string"
            },
            "phone": {
                  "type": "string"
            },
            "employee_count": {
                  "type": "number"
            },
            "entity_structure": {
                  "type": "string",
                  "description": "Legal entity structure of the employer",
                  "enum": [
                        "sole_proprietorship",
                        "partnership",
                        "llc",
                        "corporation",
                        "nonprofit",
                        "cooperative",
                        "professional_corporation"
                  ]
            },
            "naics_code": {
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
            },
            "active_theme_id": {
                  "type": "string"
            }
      },
      required: ["employer_id"],
    },
  },
  {
    name: "employers_delete_by_id",
    description: "Delete an employer",
    inputSchema: {
      type: "object",
      properties: {
            "employer_id": {
                  "type": "string",
                  "description": "employer_id path parameter"
            }
      },
      required: ["employer_id"],
    },
  },
];

const handlers: Record<string, ToolHandler> = {
  async employers_list(args) {
    try {
      const params: Record<string, unknown> = {};
      if (args.page !== undefined) params.page = args.page;
      if (args.per_page !== undefined) params.per_page = args.per_page;
      if (args.custom_attributes !== undefined) params.custom_attributes = args.custom_attributes;
      const result = await apiRequest("GET", "/api/v1/employers", { params });
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
  async employers_create(args) {
    try {
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.ein !== undefined) body.ein = args.ein;
      if (args.dba_name !== undefined) body.dba_name = args.dba_name;
      if (args.phone !== undefined) body.phone = args.phone;
      if (args.employee_count !== undefined) body.employee_count = args.employee_count;
      if (args.entity_structure !== undefined) body.entity_structure = args.entity_structure;
      if (args.naics_code !== undefined) body.naics_code = args.naics_code;
      if (args.address !== undefined) body.address = args.address;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      if (args.active_theme_id !== undefined) body.active_theme_id = args.active_theme_id;
      const result = await apiRequest("POST", "/api/v1/employers", { body });
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
  async employers_find_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        employer_id: String(args.employer_id),
      };
      const result = await apiRequest("GET", "/api/v1/employers/{employer_id}", { pathParams });
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
  async employers_update_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        employer_id: String(args.employer_id),
      };
      const body: Record<string, unknown> = {};
      if (args.name !== undefined) body.name = args.name;
      if (args.ein !== undefined) body.ein = args.ein;
      if (args.dba_name !== undefined) body.dba_name = args.dba_name;
      if (args.phone !== undefined) body.phone = args.phone;
      if (args.employee_count !== undefined) body.employee_count = args.employee_count;
      if (args.entity_structure !== undefined) body.entity_structure = args.entity_structure;
      if (args.naics_code !== undefined) body.naics_code = args.naics_code;
      if (args.address !== undefined) body.address = args.address;
      if (args.custom_attributes !== undefined) body.custom_attributes = args.custom_attributes;
      if (args.active_theme_id !== undefined) body.active_theme_id = args.active_theme_id;
      const result = await apiRequest("PATCH", "/api/v1/employers/{employer_id}", { pathParams, body });
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
  async employers_delete_by_id(args) {
    try {
      const pathParams: Record<string, string> = {
        employer_id: String(args.employer_id),
      };
      const result = await apiRequest("DELETE", "/api/v1/employers/{employer_id}", { pathParams });
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

const employersTools: ToolModule = { definitions, handlers };
export default employersTools;

#!/usr/bin/env node

/**
 * Onboarded MCP Server
 *
 * Provides 71 tools for the Onboarded public API — manage employees,
 * placements, tasks, clients, and more via Model Context Protocol.
 *
 * Configuration (environment variables):
 *   ONBOARDED_API_KEY  - Your Onboarded API key (required)
 *   ONBOARDED_BASE_URL - API base URL (default: https://app.onboarded.com)
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { toolDefinitions, handleToolCall } from "./tools/index.js";

const SERVER_NAME = "onboarded-mcp";
const SERVER_VERSION = "0.1.0";

async function main() {
  const server = new Server(
    {
      name: SERVER_NAME,
      version: SERVER_VERSION,
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: toolDefinitions,
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    return handleToolCall(name, (args ?? {}) as Record<string, unknown>);
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error(`${SERVER_NAME} v${SERVER_VERSION} running on stdio`);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

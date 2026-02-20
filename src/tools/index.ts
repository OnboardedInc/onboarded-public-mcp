// AUTO-GENERATED — do not edit by hand.
// Generated from spec/public-api.json

import type { ToolDefinition, ToolHandler } from "../lib/types.js";

import clientsTools from "./clients.js";
import componentsTools from "./components.js";
import connectedOrganizationsTools from "./connected_organizations.js";
import customPropertiesTools from "./custom_properties.js";
import employeesTools from "./employees.js";
import employersTools from "./employers.js";
import filesTools from "./files.js";
import formsTools from "./forms.js";
import jobsTools from "./jobs.js";
import magicLinksTools from "./magic_links.js";
import placementsTools from "./placements.js";
import subtasksTools from "./subtasks.js";
import taskChangeRequestsTools from "./task_change_requests.js";
import tasksTools from "./tasks.js";
import themesTools from "./themes.js";
import usersTools from "./users.js";
import webhooksTools from "./webhooks.js";

const allModules = [
  clientsTools,
  componentsTools,
  connectedOrganizationsTools,
  customPropertiesTools,
  employeesTools,
  employersTools,
  filesTools,
  formsTools,
  jobsTools,
  magicLinksTools,
  placementsTools,
  subtasksTools,
  taskChangeRequestsTools,
  tasksTools,
  themesTools,
  usersTools,
  webhooksTools,
];

export const toolDefinitions: ToolDefinition[] = allModules.flatMap((m) => m.definitions);

const handlerMap: Record<string, ToolHandler> = {};
for (const m of allModules) {
  Object.assign(handlerMap, m.handlers);
}

export async function handleToolCall(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  const handler = handlerMap[name];
  if (!handler) {
    return {
      content: [{ type: "text", text: `Unknown tool: ${name}` }],
    };
  }
  return handler(args);
}

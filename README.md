# Onboarded MCP Server

Connect Claude to the Onboarded API. Manage employees, placements, tasks, clients, and more — directly from Claude.

## Setup (Claude Desktop)

### 1. Install Node.js (if you don't have it)

Open **Terminal** and run:

```sh
node --version
```

If you see a version number (e.g. `v20.x.x`), skip to step 2. Otherwise, install Node.js:

- **macOS**: Download from [nodejs.org](https://nodejs.org/) and run the installer
- **Windows**: Download from [nodejs.org](https://nodejs.org/) and run the installer

### 2. Get your Onboarded API key

1. Log in to [Onboarded](https://app.onboarded.com)
2. Go to **Settings → API Keys**
3. Create a new API key and copy it

### 3. Add to Claude Desktop

1. Open Claude Desktop
2. Go to **Settings → Developer → Edit Config**
3. Add the following to your config file:

```json
{
  "mcpServers": {
    "onboarded": {
      "command": "npx",
      "args": ["-y", "@onboarded/mcp-server"],
      "env": {
        "ONBOARDED_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

4. Replace `your-api-key-here` with your actual API key
5. Save and restart Claude Desktop

That's it! Claude can now manage your Onboarded account.

## What you can do

Ask Claude things like:

- "List all my employees"
- "Create a new client called Acme Corp"
- "Show me placement PLM_abc123"
- "What tasks are assigned to employee EMP_xyz?"
- "Create a webhook for task.completed events"

### Available resources

| Resource | Actions |
|---|---|
| **Clients** | list, create, find, update, delete |
| **Employees** | list, create, find, update, delete, onboarding URL |
| **Employers** | list, create, find, update, delete |
| **Placements** | list, create, find, update, delete, preview |
| **Tasks** | list, create, find, update, delete, fields, PDF, onboarding URL |
| **Jobs** | list, create, find, update, delete |
| **Forms** | list, find |
| **Users** | list, create, find, delete |
| **Webhooks** | list, create, find, update, delete |
| **Themes** | list, create, find, update, delete |
| **Custom Properties** | list, create, find, delete, deprecate |
| **Connected Orgs** | list, create, find, update, delete |
| **Subtasks** | find, upload files |
| **Magic Links** | create |
| **Files** | find |
| **Components** | create URL |
| **Task Change Requests** | create |

## Configuration

| Environment Variable | Required | Default | Description |
|---|---|---|---|
| `ONBOARDED_API_KEY` | Yes | — | Your Onboarded API key |
| `ONBOARDED_BASE_URL` | No | `https://app.onboarded.com` | API base URL |

## For developers

### Regenerating tools from the OpenAPI spec

If the Onboarded public API has been updated:

```sh
# Copy the latest spec
cp /path/to/onboarded/docs/public-api.json spec/public-api.json

# Regenerate tool files
npm run generate

# Verify it compiles
npm run build
```

### Project structure

```
src/
  index.ts              # MCP server entry point
  lib/
    api-client.ts       # HTTP client with bearer auth
    types.ts            # Shared types
  tools/
    index.ts            # Aggregates all tool modules
    clients.ts          # Client operations (auto-generated)
    employees.ts        # Employee operations (auto-generated)
    ...                 # One file per API resource
scripts/
  generate-tools.ts     # OpenAPI → MCP tool code generator
spec/
  public-api.json       # OpenAPI spec (input to generator)
```

## License

MIT — Onboarded Inc

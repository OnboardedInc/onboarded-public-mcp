/**
 * HTTP client for the Onboarded public API.
 *
 * Reads configuration from environment variables:
 *   ONBOARDED_API_KEY  - Bearer token for authentication (required)
 *   ONBOARDED_BASE_URL - API base URL (defaults to https://app.onboarded.com)
 */

const DEFAULT_BASE_URL = "https://app.onboarded.com";

function getConfig(): { apiKey: string; baseUrl: string } {
  const apiKey = process.env.ONBOARDED_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ONBOARDED_API_KEY environment variable is required. " +
        "Get your API key from the Onboarded dashboard under Settings > API Keys."
    );
  }
  const baseUrl = (
    process.env.ONBOARDED_BASE_URL ?? DEFAULT_BASE_URL
  ).replace(/\/+$/, "");
  return { apiKey, baseUrl };
}

export interface ApiResponse<T = unknown> {
  ok: boolean;
  status: number;
  data: T;
}

/**
 * Make an authenticated request to the Onboarded API.
 */
export async function apiRequest<T = unknown>(
  method: string,
  path: string,
  options?: {
    params?: Record<string, unknown>;
    body?: unknown;
    pathParams?: Record<string, string>;
  }
): Promise<ApiResponse<T>> {
  const { apiKey, baseUrl } = getConfig();

  // Substitute path parameters
  let resolvedPath = path;
  if (options?.pathParams) {
    for (const [key, value] of Object.entries(options.pathParams)) {
      resolvedPath = resolvedPath.replace(
        `{${key}}`,
        encodeURIComponent(value)
      );
    }
  }

  // Build URL with query params
  const url = new URL(baseUrl + resolvedPath);
  if (options?.params) {
    for (const [key, value] of Object.entries(options.params)) {
      if (value !== undefined && value !== null && value !== "") {
        if (Array.isArray(value)) {
          for (const item of value) {
            url.searchParams.append(key, String(item));
          }
        } else {
          url.searchParams.set(key, String(value));
        }
      }
    }
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    Accept: "application/json",
  };

  const fetchOptions: RequestInit = { method, headers };

  if (options?.body && ["POST", "PUT", "PATCH"].includes(method)) {
    headers["Content-Type"] = "application/json";
    fetchOptions.body = JSON.stringify(options.body);
  }

  const response = await fetch(url.toString(), fetchOptions);

  let data: unknown;
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const errorMessage =
      typeof data === "object" && data !== null && "message" in data
        ? (data as { message: string }).message
        : `HTTP ${response.status}: ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return { ok: true, status: response.status, data: data as T };
}

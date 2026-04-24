// API client utility for making requests to the backend
// All API calls go through this client for consistent error handling

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
}

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function getAuthToken(): Promise<string | null> {
  // Will be replaced with proper auth token retrieval
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token");
  }
  return null;
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", body, headers = {} } = options;

  const token = await getAuthToken();

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  };

  if (body && method !== "GET") {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
    throw new ApiError(errorData.error || `Request failed: ${response.status}`, response.status);
  }

  return response.json();
}

// Convenience methods
export const api = {
  get: <T>(endpoint: string) => apiClient<T>(endpoint),
  post: <T>(endpoint: string, body: unknown) =>
    apiClient<T>(endpoint, { method: "POST", body }),
  put: <T>(endpoint: string, body: unknown) =>
    apiClient<T>(endpoint, { method: "PUT", body }),
  patch: <T>(endpoint: string, body: unknown) =>
    apiClient<T>(endpoint, { method: "PATCH", body }),
  delete: <T>(endpoint: string) =>
    apiClient<T>(endpoint, { method: "DELETE" }),
};

export { ApiError };

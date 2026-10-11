import { apiRequest } from "./api.js";

// Example endpoint shapes only. JSONPlaceholder does not implement auth.
// Replace these with endpoints provided by your own backend.
export function login(credentials) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export function getCurrentUser() {
  return apiRequest("/auth/me");
}

export function logout() {
  return apiRequest("/auth/logout", {
    method: "POST",
  });
}

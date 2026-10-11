import { apiRequest } from "./api.js";

// Demo API: JSONPlaceholder /posts stands in for a projects endpoint.
export function getProjects() {
  return apiRequest("/posts?_limit=10");
}

export function getProjectById(projectId) {
  return apiRequest(`/posts/${projectId}`);
}

export function createProject(projectData) {
  return apiRequest("/posts", {
    method: "POST",
    body: JSON.stringify(projectData),
  });
}

export function updateProject(projectId, projectData) {
  return apiRequest(`/posts/${projectId}`, {
    method: "PUT",
    body: JSON.stringify(projectData),
  });
}

export function deleteProject(projectId) {
  return apiRequest(`/posts/${projectId}`, {
    method: "DELETE",
  });
}

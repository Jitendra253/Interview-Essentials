import { apiRequest } from "./api.js";

// These endpoints are examples; JSONPlaceholder does not provide real sprints.
export function getSprints() {
  return apiRequest("/sprints");
}

export function getSprintById(sprintId) {
  return apiRequest(`/sprints/${sprintId}`);
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getProjects,
  createProject as createProjectRequest,
} from "../../services/projectService.js";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, { rejectWithValue }) => {
    try {
      return await getProjects();
    } catch (error) {
      return rejectWithValue(error.message || "Failed to load projects");
    }
  }
);

export const addProject = createAsyncThunk(
  "projects/addProject",
  async (projectData, { rejectWithValue }) => {
    try {
      return await createProjectRequest(projectData);
    } catch (error) {
      return rejectWithValue(error.message || "Failed to create project");
    }
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    data: [],
    loading: false,
    creating: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })
      .addCase(addProject.pending, (state) => {
        state.creating = true;
        state.error = null;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.creating = false;
        state.data.unshift(action.payload);
      })
      .addCase(addProject.rejected, (state, action) => {
        state.creating = false;
        state.error = action.payload || "Could not create project";
      });
  },
});

export default projectSlice.reducer;

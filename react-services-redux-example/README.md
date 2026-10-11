# React Services + Redux Toolkit Example

A small Vite project showing how to organize API requests in a `services/` folder and use them from Redux Toolkit.

## Included
- `services/api.js`: shared fetch helper
- `services/projectService.js`: list/get/create/update/delete project request functions
- `services/authService.js`: example auth API functions
- `services/sprintService.js`: example sprint API functions
- `store/slices/projectSlice.js`: async thunks and loading/error state
- `store/store.js`: Redux store setup
- `pages/Projects.jsx`: dispatches the thunk and displays the shared state

## Run the project
1. Install Node.js.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown by Vite, usually `http://localhost:5173`.

## API note
The project list uses `https://jsonplaceholder.typicode.com/posts?_limit=10` as a public demo endpoint. The returned posts are used as stand-in project data. JSONPlaceholder does not implement the `/auth/*` or `/sprints` endpoints shown in the example files; those functions are templates to adapt to your backend.

The demo create request is simulated by JSONPlaceholder and does not permanently save a project on its server.

## Main flow
`Projects.jsx` -> `dispatch(fetchProjects())` -> `projectSlice.js` thunk -> `projectService.js` -> `api.js` -> backend/API.

For a small component, it is also okay to call a service directly with `useEffect` and `useState`. Use Redux when data or request state needs to be shared across components.

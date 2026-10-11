import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout.jsx";
import Projects from "../pages/Projects.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/projects" replace /> },
      { path: "projects", element: <Projects /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

export default router;

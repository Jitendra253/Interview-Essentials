import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Projects from "../pages/Projects.jsx";
import NotFound from "../pages/NotFound.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import MainLayout from "../components/layout/MainLayout.jsx";

const router = createBrowserRouter([
  // Public route: everyone can visit /login.
  {
    path: "/login",
    element: <Login />,
  },

  // Pathless route: groups protected pages without adding a URL segment.
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          // Visiting "/" redirects to "/dashboard".
          {
            index: true,
            element: <Navigate to="/dashboard" replace />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
        ],
      },
    ],
  },

  // Catch-all: renders for URLs that do not match another route.
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

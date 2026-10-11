import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
  // Demo only: in this sample, login stores a token in localStorage.
  // A production app should validate authentication with its backend.
  const isAuthenticated = Boolean(localStorage.getItem("demo-token"));
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;

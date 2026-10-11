import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1>404 — Page not found</h1>
      <p>The URL you entered does not match any route.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </main>
  );
}

export default NotFound;

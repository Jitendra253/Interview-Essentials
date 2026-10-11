import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>404 — Page not found</h1>
      <p>This URL does not match a route.</p>
      <Link to="/projects">Return to Projects</Link>
    </section>
  );
}

export default NotFound;

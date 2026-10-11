import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, fetchProjects } from "../store/slices/projectSlice.js";

function Projects() {
  const dispatch = useDispatch();
  const { data, loading, creating, error } = useSelector(
    (state) => state.projects
  );
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    dispatch(addProject({ title: cleanTitle, body: "Created from the demo app", userId: 1 }))
      .unwrap()
      .then(() => setTitle(""))
      .catch(() => {
        // The error message is shown from Redux state below.
      });
  }

  return (
    <section>
      <h1>Projects</h1>
      <p>
        This example calls a service through Redux Toolkit. The demo uses
        JSONPlaceholder posts as stand-in project records.
      </p>

      <form className="create-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="New project title"
          aria-label="New project title"
        />
        <button disabled={creating} type="submit">
          {creating ? "Creating..." : "Add project"}
        </button>
      </form>

      {error && <p className="error">Error: {error}</p>}
      {loading && <p>Loading projects...</p>}

      {!loading && !error && (
        <ul className="project-list">
          {data.map((project) => (
            <li key={project.id}>
              <strong>{project.title}</strong>
              {project.body && <p>{project.body}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Projects;

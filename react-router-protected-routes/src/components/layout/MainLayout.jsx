import { NavLink, Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("demo-token");
    navigate("/login", { replace: true });
  }

  return (
    <div className="app-layout">
      <header className="header">
        <strong>VABRO Demo</strong>
        <button onClick={handleLogout}>Log out</button>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

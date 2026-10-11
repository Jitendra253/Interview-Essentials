import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app">
      <header className="header">
        <strong>Services + Redux Toolkit Demo</strong>
        <nav>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/login">Login demo</NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

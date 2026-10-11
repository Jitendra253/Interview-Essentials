import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Demo only: any non-empty username can log in.
    // Replace this with your real login API request.
    if (!username.trim()) return;

    localStorage.setItem("demo-token", "demo-token-value");
    const destination = location.state?.from?.pathname || "/dashboard";
    navigate(destination, { replace: true });
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Enter any username to try the protected routes.</p>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;

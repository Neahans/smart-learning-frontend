import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { users } from "../data/mockData";

import "./Login.css";

function Login() {
  const [role, setRole] = useState("Student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = users.find(
      (item) =>
        item.username === username.trim() &&
        item.password === password &&
        item.role === role
    );

    if (!user) {
      alert("Invalid username, password, or role.");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-decoration">
        <div className="floating-shape shape-one"></div>
        <div className="floating-shape shape-two"></div>
        <div className="floating-shape shape-three"></div>

        <div className="login-brand">
          <i className="bi bi-mortarboard-fill"></i>

          <h1>Smart Learning</h1>

          <p>
            Learn. Grow. Achieve.
          </p>
        </div>
      </div>

      <div className="login-section">

        <div className="login-card">

          <div className="login-header">
            <div className="login-icon">
              <i className="bi bi-person-circle"></i>
            </div>

            <h2>Welcome Back</h2>

            <p>
              Sign in to continue learning
            </p>
          </div>

          {/* Role Selection */}
          <div className="role-selector">

            <button
              type="button"
              className={
                role === "Student"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => setRole("Student")}
            >
              <i className="bi bi-person"></i>
              <span>Student</span>
            </button>

            <button
              type="button"
              className={
                role === "Mentor"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => setRole("Mentor")}
            >
              <i className="bi bi-person-workspace"></i>
              <span>Mentor</span>
            </button>

            <button
              type="button"
              className={
                role === "Admin"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => setRole("Admin")}
            >
              <i className="bi bi-shield-lock"></i>
              <span>Admin</span>
            </button>

          </div>

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label className="form-label">
                Username
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) =>
                    setUsername(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">
                Password
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 login-btn"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login as {role}
            </button>

          </form>

          

        </div>
      </div>

    </div>
  );
}

export default Login;
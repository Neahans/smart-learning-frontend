import React from "react";

import "./Navbar.css";

function Navbar() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return (
    <header className="top-navbar">

      <div className="navbar-title">
        <h5>Smart Learning</h5>
        <small>
          Learning Management System
        </small>
      </div>

      <div className="navbar-user">

        <div className="navbar-user-info">
          <strong>
            {currentUser?.name || "User"}
          </strong>

          <small>
            {currentUser?.role || "Student"}
          </small>
        </div>

        <div className="navbar-avatar">
          <i className="bi bi-person-fill"></i>
        </div>

      </div>

    </header>
  );
}

export default Navbar;
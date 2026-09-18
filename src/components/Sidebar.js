import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const role = currentUser?.role || "Student";

  const adminLinks = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: "bi-grid-1x2-fill",
    },
    {
      path: "/courses",
      label: "Courses",
      icon: "bi-book-fill",
    },
    {
      path: "/modules",
      label: "Modules",
      icon: "bi-collection-fill",
    },
    {
      path: "/notes",
      label: "Notes",
      icon: "bi-journal-text",
    },
    {
      path: "/students",
      label: "Students",
      icon: "bi-people-fill",
    },
    {
      path: "/mentors",
      label: "Mentors",
      icon: "bi-person-workspace",
    },
    {
      path: "/unlock-requests",
      label: "Unlock Requests",
      icon: "bi-unlock-fill",
    },
    {
      path: "/profile",
      label: "Profile",
      icon: "bi-person-circle",
    },
  ];

  const mentorLinks = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: "bi-grid-1x2-fill",
    },
    {
      path: "/students",
      label: "My Students",
      icon: "bi-people-fill",
    },
    {
      path: "/courses",
      label: "Courses",
      icon: "bi-book-fill",
    },
    {
      path: "/modules",
      label: "Modules",
      icon: "bi-collection-fill",
    },
    {
      path: "/notes",
      label: "Notes",
      icon: "bi-journal-text",
    },
    {
      path: "/unlock-requests",
      label: "Unlock Requests",
      icon: "bi-unlock-fill",
    },
    {
      path: "/profile",
      label: "Profile",
      icon: "bi-person-circle",
    },
  ];

  const studentLinks = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: "bi-grid-1x2-fill",
    },
    {
      path: "/courses",
      label: "My Courses",
      icon: "bi-book-fill",
    },
    {
      path: "/modules",
      label: "My Modules",
      icon: "bi-collection-fill",
    },
    {
      path: "/notes",
      label: "My Notes",
      icon: "bi-journal-text",
    },
    {
      path: "/unlock-requests",
      label: "Request Unlock",
      icon: "bi-unlock-fill",
    },
    {
      path: "/profile",
      label: "Profile",
      icon: "bi-person-circle",
    },
  ];

  let links = studentLinks;

  if (role === "Admin") {
    links = adminLinks;
  } else if (role === "Mentor") {
    links = mentorLinks;
  }

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <i className="bi bi-mortarboard-fill"></i>
        </div>

        <div>
          <h5>Smart Learning</h5>
          <small>{role}</small>
        </div>
      </div>

      <nav className="sidebar-nav">

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <i className={`bi ${link.icon}`}></i>
            <span>{link.label}</span>
          </NavLink>
        ))}

      </nav>

      <div className="sidebar-bottom">

        <NavLink
          to="/login"
          className="sidebar-link logout-link"
          onClick={() => {
            localStorage.removeItem("currentUser");
          }}
        >
          <i className="bi bi-box-arrow-left"></i>
          <span>Logout</span>
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const navItems = [
    { label: "Dashboard", active: true },
    { label: "Consultas", active: false },
    { label: "Pacientes", active: false },
    { label: "Leitos", active: false },
    { label: "Recursos", active: false },
  ];

  return (
    <aside className="dashboard-sidebar">
      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-link ${item.active ? "active" : ""}`}
          >
            <svg
              className="nav-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 3V9H21V3M13 21H21V11H13M3 21H11V15H3M3 13H11V3H3V13Z"
                fill="currentColor"
              />
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

import React, { useState } from "react";
import Header from "../components/Header/Header";
import "./Layout.css";

const ProfessionalLayout = ({ children, onNavigate }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="dashboard-layout">
        {children}
      </div>
    </div>
  );
};

export default ProfessionalLayout;

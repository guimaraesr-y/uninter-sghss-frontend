import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Layout.css";

const Layout = ({ children, onNavigate }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="dashboard-layout">
        <Sidebar isOpen={isSidebarOpen} onNavigate={onNavigate} />
        {children}
      </div>
    </div>
  );
};

export default Layout;

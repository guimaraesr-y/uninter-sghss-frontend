import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DailySummary from "./components/DailySummary/DailySummary";
import ProfessionalSchedule from "./components/ProfessionalSchedule/ProfessionalSchedule";
import FutureAppointments from "./components/FutureAppointments/FutureAppointments";
import Calendar from "./components/Calendar/Calendar";
import Notifications from "./components/Notifications/Notifications";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="dashboard-layout">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <DailySummary />
          <ProfessionalSchedule />
          <FutureAppointments />
        </main>
        <aside className="right-sidebar">
          <Calendar />
          <Notifications />
        </aside>
      </div>
    </div>
  );
}

export default App;

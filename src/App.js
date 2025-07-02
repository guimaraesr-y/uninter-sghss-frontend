import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DailySummary from "./components/DailySummary";
import ProfessionalSchedule from "./components/ProfessionalSchedule";
import FutureAppointments from "./components/FutureAppointments";
import Calendar from "./components/Calendar";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="dashboard-app">
      <Header />
      <div className="dashboard-layout">
        <Sidebar />
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

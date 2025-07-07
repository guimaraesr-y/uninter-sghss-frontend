import React, { useState } from "react";
import DailySummary from "../../components/DailySummary/DailySummary";
import ProfessionalSchedule from "../../components/ProfessionalSchedule/ProfessionalSchedule";
import FutureAppointments from "../../components/FutureAppointments/FutureAppointments";
import Calendar from "../../components/Calendar/Calendar";
import Notifications from "../../components/Notifications/Notifications";
import Layout from "../../layout/Layout";
import ConsultasTab from "./consultas/ConsultasTab";

import "./Dashboard.css";

const Dashboard = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const handleNavigate = (view) => {
    setActiveView(view);
  };

  return (
    <Layout onNavigate={handleNavigate}>
      <main className="main-content">
        {activeView === "dashboard" && (
          <>
            <DailySummary />
            <ProfessionalSchedule />
            <FutureAppointments />
          </>
        )}
        {activeView === "consultas" && <ConsultasTab />}
      </main>
      <aside className="right-sidebar">
        <div className="floating-sidebar">
          <Calendar />
          <Notifications />
        </div>
      </aside>
    </Layout>
  );
};

export default Dashboard;

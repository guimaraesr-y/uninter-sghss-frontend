import React from "react";
import DailySummary from "../../components/DailySummary/DailySummary";
import ProfessionalSchedule from "../../components/ProfessionalSchedule/ProfessionalSchedule";
import FutureAppointments from "../../components/FutureAppointments/FutureAppointments";
import Calendar from "../../components/Calendar/Calendar";
import Notifications from "../../components/Notifications/Notifications";
import Layout from "../../layout/Layout";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Layout>
      <main className="main-content">
        <DailySummary />
        <ProfessionalSchedule />
        <FutureAppointments />
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

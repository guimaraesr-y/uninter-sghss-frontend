import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import ProfessionalView from "./views/Professional/ProfessionalView";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/professional" element={<ProfessionalView />} />
    </Routes>
  );
}

export default App;

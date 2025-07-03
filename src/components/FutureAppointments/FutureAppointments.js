import React from "react";
import "./FutureAppointments.css";

const FutureAppointments = () => {
  const appointments = [
    {
      patientName: "João Silva",
      condition: "Ansiedade",
      date: "01/07/2025, 10h00",
      notes: "Primeira visita",
    },
    {
      patientName: "Maria Martins",
      condition: "Check-up",
      date: "01/07/2025, 10h30",
      notes: "Acompanhamento",
    },
  ];

  return (
    <section className="future-appointments">
      <h2 className="section-title">Consultas Futuras</h2>
      <div className="appointments-table">
        <div className="table-header">
          <div className="header-cell">Nome do Paciente</div>
          <div className="header-cell">Condição</div>
          <div className="header-cell">Data da Consulta</div>
          <div className="header-cell">Notas Especiais</div>
        </div>

        {appointments.map((appointment, index) => (
          <div key={index} className="table-row">
            <div className="table-cell">{appointment.patientName}</div>
            <div className="table-cell">{appointment.condition}</div>
            <div className="table-cell">{appointment.date}</div>
            <div className="table-cell">{appointment.notes}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FutureAppointments;

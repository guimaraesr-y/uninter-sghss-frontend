import React from "react";
import "./ProfessionalSchedule.css";

const ProfessionalSchedule = () => {
  const timeSlots = ["9h", "10h", "11h", "12h", "13h", "14h"];

  const professionals = [
    {
      name: "João",
      appointments: [
        { type: "Check-up", slot: 0 },
        { type: "occupied", slot: 1 },
        { type: "occupied", slot: 2 },
        { type: "Check-up", slot: 3 },
        { type: "Check-up", slot: 4 },
      ],
    },
    {
      name: "Julio",
      appointments: [
        { type: "Extração", slot: 0 },
        { type: "Exame de Sangue", slot: 1 },
        { type: "Check-up", slot: 2 },
        { type: "Check-up", slot: 3 },
        { type: "Check-up", slot: 4 },
      ],
    },
  ];

  return (
    <section className="professional-schedule">
      <h2 className="section-title">Agenda de Profissionais</h2>
      <div className="schedule-container">
        <div className="time-header">
          {timeSlots.map((time, index) => (
            <div key={index} className="time-slot-header">
              {time}
            </div>
          ))}
        </div>

        {professionals.map((professional, profIndex) => (
          <div key={profIndex} className="professional-row">
            <div className="professional-name">{professional.name}</div>
            <div className="appointments-row">
              {timeSlots.map((_, timeIndex) => {
                const appointment = professional.appointments.find(
                  (apt) => apt.slot === timeIndex,
                );
                return (
                  <div
                    key={timeIndex}
                    className={`appointment-slot ${appointment?.type === "occupied" ? "occupied" : "available"}`}
                  >
                    {appointment && appointment.type !== "occupied" && (
                      <span className="appointment-text">
                        {appointment.type}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalSchedule;

import React from 'react';
import './Consultas.css';

const ConsultationList = ({ consultations, onNew, onRemove }) => (
  <div className="consultation-list-container">
    <button className="btn-new" onClick={onNew}>Marcar Nova Consulta</button>
    <ul className="consultation-list">
      {consultations.map(c => (
        <li key={c.id} className="consultation-item">
          <div className="consultation-info">
            <span className="patient-name">{c.patientName} - {c.type}</span>
            <span className="datetime">
              <span className="icon">📅</span> {c.date}
              <span className="icon">⏰</span> {c.time}
            </span>
          </div>
          <button
            className="btn-remove"
            onClick={() => onRemove(c.id)}
            aria-label="Remover consulta"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ConsultationList;
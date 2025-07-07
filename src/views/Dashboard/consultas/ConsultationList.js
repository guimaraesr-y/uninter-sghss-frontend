import React from 'react';
import './Consultas.css';

const ConsultationList = ({ consultations, onNew }) => (
  <div className="consultation-list-container">
    <button className="btn-new" onClick={onNew}>Marcar Nova Consulta</button>
    <ul className="consultation-list">
      {consultations.map(c => (
        <li key={c.id} className="consultation-item">
          <div><strong>{c.patientName}</strong></div>
          <div>{c.date} às {c.time}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default ConsultationList;
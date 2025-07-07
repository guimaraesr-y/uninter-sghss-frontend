import React from 'react';
import { Card } from './Card';

export const UpcomingConsultations = ({ consultations, onDetails }) => (
  <section className="section">
    <h2 className="section-title">Próximas Consultas</h2>
    <div className="card-grid">
      {consultations.map(c => (
        <Card
          key={c.id}
          title={`Consulta com ${c.patient}`}
          actionLabel="Ver detalhes"
          onAction={() => onDetails(c.id)}
        >
          <p>Data: {c.date}, {c.time}</p>
          <p>Paciente: {c.patient}</p>
          <p>{c.type}</p>
        </Card>
      ))}
    </div>
  </section>
);

export default UpcomingConsultations;
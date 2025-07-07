import React from 'react';
import { Card } from './Card';

export const UpdateRecords = ({ records, onUpdate }) => (
  <section className="section">
    <h2 className="section-title">Atualizar Prontuários</h2>
    <div className="card-grid">
      {records.map(r => (
        <Card
          key={r.id}
          title={r.name}
          actionLabel="Atualizar"
          onAction={() => onUpdate(r.id)}
        >
          <p>Última atualização: {r.last}</p>
        </Card>
      ))}
    </div>
  </section>
);

export default UpdateRecords;
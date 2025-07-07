import React, { useState } from 'react';
import ConsultationList from './ConsultationList';
import ConsultationForm from './ConsultationForm';

import './Consultas.css';

const ConsultasTab = () => {
  const [view, setView] = useState('list');
  const [consultations, setConsultations] = useState([
    {
      id: 1,
      patientName: 'Joaquim',
      type: 'Consulta',
      date: '2023-08-19',
      time: '10:00',
      doctor: 'Dr. João',
    }
  ]);

  const handleNew = () => setView('form');
  const handleCancel = () => setView('list');
  const handleSubmit = data => {
    setConsultations(prev => [...prev, { id: Date.now(), ...data }]);
    setView('list');
  };

  return (
    <div className="app-container">
      <div className="main-content">
        {view === 'list' ? (
          <ConsultationList consultations={consultations} onNew={handleNew} />
        ) : (
          <ConsultationForm
            initialData={{ type: 'Primeira', patientName: '', phone: '', email: '', notes: '', date: '', time: '', doctor: 'Dr. João' }}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default ConsultasTab;

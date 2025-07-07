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
      type: 'primeira',
      date: '2023-08-19',
      time: '10:00',
      doctor: 'Dr. João',
    },
    {
      id: 2,
      patientName: 'Maria',
      type: 'acompanhamento',
      date: '2023-08-26',
      time: '15:00',
      doctor: 'Dr. João',
    },
    {
      id: 3,
      patientName: 'Pedro',
      type: 'primeira',
      date: '2023-08-22',
      time: '9:00',
      doctor: 'Dr. João',
    },
    {
      id: 4,
      patientName: 'Ana',
      type: 'acompanhamento',
      date: '2023-08-20',
      time: '11:00',
      doctor: 'Dr. João',
    },
    {
      id: 5,
      patientName: 'João',
      type: 'primeira',
      date: '2023-08-28',
      time: '14:00',
      doctor: 'Dr. João',
    },
  ]);

  const handleNew = () => setView('form');
  const handleCancel = () => setView('list');
  const handleSubmit = data => {
    setConsultations(prev => [...prev, { id: Date.now(), ...data }]);
    setView('list');
  };
  const handleRemove = id => setConsultations(prev => prev.filter(c => c.id !== id));


  return (
    <div className="app-container">
      <div className="main-content">
        {view === 'list' ? (
          <ConsultationList consultations={consultations} onNew={handleNew} onRemove={handleRemove} />
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

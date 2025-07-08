import React, { useState } from 'react';
import QuickAccess from './QuickAccess';
import UpcomingConsultations from './UpcomingConsultations';
import UpdateRecords from './UpdateRecords';
import AvailabilityCalendar from './AvailabilityCalendar';
import ProfessionalLayout from '../../layout/ProfessionalLayout';

import './Professional.css';

const ProfessionalPage = () => {
  const quickItems = [
    { key: 'relatorios', label: 'Relatórios' },
    { key: 'telemed', label: 'Telemedicina' },
  ];
  const consultations = [
    { id: 1, patient: 'João da Silva', date: '12/10/2025', time: '14h00', type: 'Check-up' },
    { id: 2, patient: 'Maria Souza', date: '13/10/2025', time: '10h00', type: 'Acompanhamento' }
  ];
  const records = [
    { id: 1, name: 'Maria Oliveira', last: '10/10/2024' },
    { id: 2, name: 'Felipe Lima', last: '10/10/2024' }
  ];

  // torna availability mutável
  const [availability, setAvailability] = useState([
    {
      id: 1,
      date: new Date('2025-10-12'),
      start: new Date('2025-10-12T09:00'),
      end: new Date('2025-10-12T12:00'),
      label: 'Livre',
      busy: false,
      type: 'free'
    },
    {
      id: 2,
      date: new Date('2025-10-12'),
      start: new Date('2025-10-12T12:00'),
      end: new Date('2025-10-12T12:30'),
      label: 'Não disponível',
      busy: true,
      type: 'blocked'
    },
    {
      id: 3,
      date: new Date('2025-10-12'),
      start: new Date('2025-10-12T12:30'),
      end: new Date('2025-10-12T13:30'),
      label: 'Cirurgia - Marcos',
      busy: false,
      type: 'surgery'
    },
    {
      id: 4,
      date: new Date('2025-10-12'),
      start: new Date('2025-10-12T13:30'),
      end: new Date('2025-10-12T18:00'),
      label: 'Não disponível',
      busy: true,
      type: 'blocked'
    },
  ]);

  // implementa adicionar um bloqueio genérico
  const handleAdd = (date) => {
    // pedir ao usuário horário de início e fim
    const startInput = window.prompt('Horário de início (HH:mm)', '15:00');
    if (!startInput) return;
    const endInput = window.prompt('Horário de término (HH:mm)', '16:00');
    if (!endInput) return;

    const [h1, m1] = startInput.split(':').map(Number);
    const [h2, m2] = endInput.split(':').map(Number);
    const start = new Date(date);
    start.setHours(h1, m1, 0, 0);
    const end = new Date(date);
    end.setHours(h2, m2, 0, 0);

    const nextId = Math.max(...availability.map(a => a.id), 0) + 1;
    const newEntry = {
      id: nextId,
      date,
      start,
      end,
      label: 'Bloqueado',
      busy: true,
      type: 'blocked'
    };

    setAvailability(prev => [...prev, newEntry]);
  };

  const handleRemove = (id) => {
    if (window.confirm('Deseja realmente remover este bloqueio/consulta?')) {
      setAvailability(prev => prev.filter(a => a.id !== id));
    }
  };

  return (
    <ProfessionalLayout>
      <div className="app-container">
        <QuickAccess items={quickItems} onSelect={() => { }} />
        <div className="main-content">
          <UpcomingConsultations consultations={consultations} onDetails={() => { }} />
          <UpdateRecords records={records} onUpdate={() => { }} />
          <AvailabilityCalendar
            availability={availability}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        </div>
      </div>
    </ProfessionalLayout>
  );
};

export default ProfessionalPage;

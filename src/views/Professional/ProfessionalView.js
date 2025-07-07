import React from 'react';
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
  const availability = [
    { label: 'Livre', busy: false, type: 'free' },
    { label: 'Não disponível', busy: true },
    { label: 'Cirurgia - Marcos', busy: false, type: 'surgery' },
    { label: 'Não disponível', busy: true }
  ];
  return (
    <ProfessionalLayout>
      <div className="app-container">
        <QuickAccess items={quickItems} onSelect={() => { }} />
        <div className="main-content">
          <UpcomingConsultations consultations={consultations} onDetails={() => { }} />
          <UpdateRecords records={records} onUpdate={() => { }} />
          <AvailabilityCalendar availability={availability} />
        </div>
      </div>
    </ProfessionalLayout>
  )
};

export default ProfessionalPage;

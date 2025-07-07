import React from 'react';
import { ScheduleRow } from './ScheduleRow';
import './ProfessionalSchedule.css';

const hours = Array.from({ length: 12 }, (_, i) => `${i + 8}h`); // 8h to 19h

const ProfessionalSchedule = () => {
  const data = [
    {
      name: 'João',
      schedule: [
        { hour: '8h' },
        { hour: '9h', content: 'Check-up' },
        { hour: '10h', busy: true },
        { hour: '11h', busy: true },
        { hour: '12h', content: 'Check-up' },
        { hour: '13h', content: 'Check-up' },
        { hour: '14h', content: 'Check-up' },
        { hour: '15h' },
        { hour: '16h' },
        { hour: '17h' },
        { hour: '18h' },
        { hour: '19h' },
      ],
    },
    {
      name: 'Julio',
      schedule: [
        { hour: '8h' },
        { hour: '9h', content: 'Extração' },
        { hour: '10h', content: 'Exame de Sangue' },
        { hour: '11h', content: 'Check-up' },
        { hour: '12h', content: 'Check-up' },
        { hour: '13h', content: 'Check-up' },
        { hour: '14h', content: 'Check-up' },
        { hour: '15h' },
        { hour: '16h' },
        { hour: '17h' },
        { hour: '18h' },
        { hour: '19h' },
      ],
    },
  ];

  return (
    <div className="agenda-container">
      <h1 className="agenda-title">Agenda de Profissionais</h1>
      <div className="agenda-scroll-wrapper">
        <div className="agenda-table">
          <div className="agenda-header">
            <div className="row-name"></div>
            {hours.map((hour) => (
              <div key={hour} className="header-hour">{hour}</div>
            ))}
          </div>
          {data.map((row, index) => (
            <ScheduleRow key={index} {...row} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSchedule;
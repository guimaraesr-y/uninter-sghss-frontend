import React from 'react';
import { Slot } from './Slot';
import './ProfessionalSchedule.css';

export const ScheduleRow = ({ name, schedule }) => {
  return (
    <div className="schedule-row">
      <div className="row-name">{name}</div>
      {schedule.map((slot, index) => (
        <Slot key={index} {...slot} />
      ))}
    </div>
  );
};

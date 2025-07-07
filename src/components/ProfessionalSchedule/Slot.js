import React from 'react';
import './ProfessionalSchedule.css';

export const Slot = ({ hour, content, busy }) => {
  return (
    <div className={`slot ${busy ? 'slot-busy' : 'slot-free'}`}>
      {content || ''}
    </div>
  );
};
import React, { useState } from 'react';
import { format, startOfMonth, addMonths, subMonths, eachDayOfInterval, endOfMonth } from 'date-fns';

import './Professional.css';

export const AvailabilityCalendar = ({ availability }) => {
  const [current, setCurrent] = useState(new Date());
  const monthStart = startOfMonth(current);
  const monthDays = eachDayOfInterval({ start: monthStart, end: endOfMonth(current) });

  return (
    <section className="section">
      <h2 className="section-title">Calendário de Disponibilidade</h2>
      <div className="calendar-container">
        <div className="calendar">
          <div className="cal-header">
            <button onClick={() => setCurrent(subMonths(current, 1))}>&lt;</button>
            <span>{format(current, 'LLLL yyyy')}</span>
            <button onClick={() => setCurrent(addMonths(current, 1))}>&gt;</button>
          </div>
          <div className="days-grid">
            {['Dom','Seg','Ter','Qua','Qui','Sex','Sab'].map(d => <div key={d} className="day-name">{d}</div>)}
            {monthDays.map(day => (
              <div
                key={day.toString()}
                className={`day-cell ${day.getDate() === new Date().getDate() ? 'today' : ''}`}
                onClick={() => console.log(day)}
              >{day.getDate()}</div>
            ))}
          </div>
        </div>
        <div className="availability-list">
          <h4>Horários - {format(current, 'dd/MM/yyyy')}</h4>
          {availability.map((a, i) => (
            <div key={i} className={`slot ${a.busy ? 'busy' : a.type === 'surgery' ? 'surgery' : 'free'}`}>{a.label}</div>
          ))}
          <button className="btn-add">+</button>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityCalendar;
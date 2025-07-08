import React, { useState } from 'react';
import './Professional.css';
import {
  format,
  startOfMonth,
  addMonths,
  subMonths,
  eachDayOfInterval,
  endOfMonth,
} from 'date-fns';

export const AvailabilityCalendar = ({ availability, onAdd, onRemove }) => {
  const [current, setCurrent] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(current);
  const monthDays = eachDayOfInterval({
    start: monthStart,
    end: endOfMonth(current),
  });

  // Filter entries for selectedDate
  const entries = availability.filter(
    (a) => format(new Date(a.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

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
            {['Dom','Seg','Ter','Qua','Qui','Sex','Sab'].map(d => (
              <div key={d} className="day-name">{d}</div>
            ))}
            {monthDays.map(day => (
              <div
                key={day.toString()}
                className={`day-cell ${format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'selected' : ''}`}
                onClick={() => setSelectedDate(day)}
              >
                {day.getDate()}
              </div>
            ))}
          </div>
        </div>
        <div className="availability-list">
          <div className="avail-header">
            <h4>Horários - {format(selectedDate, 'dd/MM/yyyy')}</h4>
            <button className="btn-add" onClick={() => onAdd(selectedDate)} title="Adicionar bloqueio">+</button>
          </div>
          <div className="entries-scroll">
            {entries.map((e) => (
              <div key={`${e.id}`} className="entry-row">
                <div className="entry-time">
                  {format(new Date(e.start), 'HH:mm')} - {format(new Date(e.end), 'HH:mm')}
                </div>
                <div className={`entry-label ${e.busy ? 'busy' : e.type === 'surgery' ? 'surgery' : 'free'}`}>
                  {e.label}
                </div>
                <button className="btn-remove-entry" onClick={() => onRemove(e.id)} title="Remover">×</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityCalendar;
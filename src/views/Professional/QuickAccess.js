import React from 'react';
import './Professional.css';

export const QuickAccess = ({ items, onSelect }) => (
  <aside className="quick-access">
    <h3 className="qa-title">Acesso Rápido</h3>
    <ul className="qa-list">
      {items.map(item => (
        <li key={item.key}>
          <button className="qa-button" onClick={() => onSelect(item.key)}>
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  </aside>
);

export default QuickAccess;
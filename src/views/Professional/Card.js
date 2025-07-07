import React from 'react';

import './Professional.css';

export const Card = ({ title, children, onAction, actionLabel }) => (
  <div className="card">
    <h4 className="card-title">{title}</h4>
    <div className="card-content">{children}</div>
    {onAction && (
      <button className="card-action" onClick={onAction}>{actionLabel}</button>
    )}
  </div>
);
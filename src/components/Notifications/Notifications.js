import React from "react";
import "./Notifications.css";

const Notifications = () => {
  const notifications = [
    "Você tem 15 novas consultas marcadas",
    "Novo pedido de consulta recebido!",
    "Dr. Silva atualizou sua agenda.",
    "Novo registro de paciente.",
  ];

  const bellIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 19V20H3V19L5 17V11C5 7.9 7.03 5.17 10 4.29C10 4.19 10 4.1 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.1 14 4.19 14 4.29C16.97 5.17 19 7.9 19 11V17L21 19ZM14 21C14 21.5304 13.7893 22.0391 13.4142 22.4142C13.0391 22.7893 12.5304 23 12 23C11.4696 23 10.9609 22.7893 10.5858 22.4142C10.2107 22.0391 10 21.5304 10 21"
        fill="black"
      />
    </svg>
  );

  return (
    <div className="notifications-panel">
      <h3 className="notifications-title">Notificações</h3>
      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            <div className="notification-icon">{bellIcon}</div>
            <div className="notification-text">{notification}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

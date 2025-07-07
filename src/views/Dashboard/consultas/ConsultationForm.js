import React, { useState } from 'react';
import './Consultas.css';

const ConsultationForm = ({ initialData, onCancel, onSubmit }) => {
  const [form, setForm] = useState(initialData);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-container">
      <h2>Marcar Nova Consulta</h2>
      <div className="form-group">
        <label>Tipo de consulta:</label>
        <label><input type="radio" name="type" value="primeira" checked={form.type === 'primeira'} onChange={handleChange}/> primeira consulta</label>
        <label><input type="radio" name="type" value="acompanhamento" checked={form.type === 'acompanhamento'} onChange={handleChange}/> acompanhamento</label>
      </div>
      <div className="form-columns">
        <div className="column-left">
          <div className="form-group"><label>Nome do paciente</label><input name="patientName" value={form.patientName} onChange={handleChange}/></div>
          <div className="form-group"><label>Celular</label><input name="phone" value={form.phone} onChange={handleChange}/></div>
          <div className="form-group"><label>Email</label><input name="email" value={form.email} onChange={handleChange}/></div>
          <div className="form-group"><label>Informações Adicionais</label><textarea name="notes" value={form.notes} onChange={handleChange}/></div>
        </div>
        <div className="column-right">
          <div className="form-group"><label>Data</label><input type="date" name="date" value={form.date} onChange={handleChange}/></div>
          <div className="form-group"><label>Hora</label><input type="time" name="time" value={form.time} onChange={handleChange}/></div>
          <div className="form-group"><label>Médico</label><input name="doctor" value={form.doctor} onChange={handleChange}/></div>
          <div className="form-actions">
            <button className="btn-submit" onClick={() => onSubmit(form)}>Agendar</button>
            <button className="btn-cancel" onClick={onCancel}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
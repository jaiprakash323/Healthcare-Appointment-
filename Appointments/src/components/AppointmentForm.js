import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ doctor, onBack }) => {
  const [form, setForm] = useState({ name: '', email: '', slot: '' });
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.slot) setConfirmed(true);
  };

  return (
    <div className="appointment-form">
      <button onClick={onBack} className="back-btn">⬅ Back</button>
      {!confirmed ? (
        <form onSubmit={handleSubmit}>
          <h2>Book Appointment with {doctor.name}</h2>
          <input name="name" placeholder="Your Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <select name="slot" onChange={handleChange} required>
            <option value="">Select a slot</option>
            {doctor.slots.map((slot, idx) => (
              <option key={idx} value={slot}>{new Date(slot).toLocaleString()}</option>
            ))}
          </select>
          <button type="submit">Confirm</button>
        </form>
      ) : (
        <div className="confirmation"> Appointment booked for {new Date(form.slot).toLocaleString()}</div>
      )}
    </div>
  );
};

export default AppointmentForm;
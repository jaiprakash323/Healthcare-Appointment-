import React from 'react';
import './DoctorProfile.css';

const DoctorProfile = ({ doctor, onBookClick, onBack }) => (
  <div className="doctor-profile">
    <button onClick={onBack} className="back-btn">⬅ Back</button>
    <img src={doctor.image} alt={doctor.name} />
    <h2>{doctor.name}</h2>
    <p><strong>Specialization:</strong> {doctor.specialization}</p>
    <p><strong>Status:</strong> {doctor.status}</p>
    <h4>Available Slots:</h4>
    <ul>
      {doctor.slots.map((slot, idx) => (
        <li key={idx}>{new Date(slot).toLocaleString()}</li>
      ))}
    </ul>
    <button className="book-btn" onClick={onBookClick}>Book Appointment</button>
  </div>
);

export default DoctorProfile;
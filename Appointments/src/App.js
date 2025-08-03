import React, { useState } from 'react';
import doctors from './data/doctors.json';
import DoctorList from './components/DoctorList';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';
import './App.css';

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsBooking(false);
  };

  const handleBookClick = () => {
    setIsBooking(true);
  };

  const handleBack = () => {
    if (isBooking) setIsBooking(false);
    else setSelectedDoctor(null);
  };

  return (
    <div className="app">
      <h1 className="title">Healthcare Appointment Booking</h1>
      {!selectedDoctor && <DoctorList doctors={doctors} onDoctorClick={handleDoctorClick} />}
      {selectedDoctor && !isBooking && (
        <DoctorProfile doctor={selectedDoctor} onBookClick={handleBookClick} onBack={handleBack} />
      )}
      {selectedDoctor && isBooking && (
        <AppointmentForm doctor={selectedDoctor} onBack={handleBack} />
      )}
    </div>
  );
};

export default App;

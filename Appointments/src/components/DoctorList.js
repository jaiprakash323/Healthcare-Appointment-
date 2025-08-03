import React, { useState } from 'react';
import './DoctorList.css';

const DoctorList = ({ doctors, onDoctorClick }) => {
  const [search, setSearch] = useState('');
  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="doctor-list">
      <input
        type="text"
        placeholder="Search doctors by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className='bg-image-hospital'></div>
      <div className="grid">
        {filtered.map(doc => (
          <div key={doc.id} className="card" onClick={() => onDoctorClick(doc)}>
            <img src={doc.image} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p>{doc.specialization}</p>
            <span className={`status ${doc.status.replace(/\s+/g, '').toLowerCase()}`}>{doc.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
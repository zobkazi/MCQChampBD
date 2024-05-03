'use client';
import React, { useState } from 'react';
import { bdUpazilas, Upazila } from '@/config/bdUpazilas';
import { bdDistricts, District } from '@/config/bdDistricts';

const RegistrationForm: React.FC = () => {
  const [selectedUpazila, setSelectedUpazila] = useState<Upazila | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [selectedDistrictShape, setSelectedDistrictShape] = useState (null);

  const handleUpazilaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const upazila = bdUpazilas().find(upazila => upazila.id === selectedId);
    setSelectedUpazila(upazila || null);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const district = bdDistricts().find(district => district.id === selectedId);
    setSelectedDistrict(district || null);
    // Fetch and set the shape data for the selected district
    
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <select onChange={handleUpazilaChange}>
        <option value="">Select an Upazila</option>
        {bdUpazilas().map(upazila => (
          <option key={upazila.id} value={upazila.id}>{upazila.name}</option>
        ))}
      </select>

      {selectedUpazila && (
        <div>
          <h2>Selected Upazila:</h2>
          <p>Name: {selectedUpazila.name}</p>
          <p>Latitude: {selectedUpazila.lat}</p>
          <p>Longitude: {selectedUpazila.long}</p>
        </div>
      )}

      <select onChange={handleDistrictChange}>
        <option value="">Select a District</option>
        {bdDistricts().map(district => (
          <option key={district.id} value={district.id}>{district.name}</option>
        ))}
      </select>

      {selectedDistrictShape && (
        <div>
          <h2>Selected District Shape:</h2>
          {/* Render the shape data here */}
          {/* Example: <img src={selectedDistrictShape.imageURL} alt="District Shape" /> */}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;

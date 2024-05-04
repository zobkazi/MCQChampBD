'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetDivisions: React.FC = () => {
  // State for divisions data
  const [divisions, setDivisions] = useState<any[]>([]);
  // State for selected division
  const [selectedDivision, setSelectedDivision] = useState<string>('');
  // State for additional input fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  // Fetch divisions data from API when the component mounts
  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await axios.get('http://localhost:4007/api/divisions');
        setDivisions(response.data.data);
      } catch (error) {
        console.error('Error fetching divisions:', error);
      }
    };
    fetchDivisions();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Log selected division and user data
    console.log('Selected Division:', selectedDivision);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);

    try {
      // Send selected division and additional input data to the server to save in the database
      await axios.post('http://localhost:4007/api/saveData', { division: selectedDivision, name, email, address });
      // Reset form fields after successful submission
      setSelectedDivision('');
      setName('');
      setEmail('');
      setAddress('');
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select Division and Provide Additional Information</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Dropdown/select input for divisions */}
        <select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 mb-4">
          <option value="">Select Division</option>
          {divisions.map((division) => (
            <option key={division._id} value={division._id}>{division.name}</option>
          ))}
        </select>
        {/* Additional input fields */}
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 mb-4" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 mb-4" />
        <textarea placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 mb-4"></textarea>
        <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">Save</button>
          </form>
          
          {
            selectedDivision && (
                  <div>
                    <p>Selected Division: {selectedDivision}</p>
              </div>
            )
          }
    </div>
  );
};

export default GetDivisions;

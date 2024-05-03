'use client'

// components/CountryForm.tsx

import { useState, useEffect, ReactNode } from 'react';

const CountryForm: React.FC = () => {
  const [countries, setCountries] = useState<{
    name: ReactNode;
    code: string | number | readonly string[] | undefined; countries: string
}[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  useEffect(() => {
    // Fetch countries data from an API
    const fetchCountries = async () => {
      try {
        const response = await fetch('http://localhost:4001/api/countries'); // Assuming you have an API endpoint to fetch countries
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          console.error('Failed to fetch countries');
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ country: selectedCountry })
      });
      if (response.ok) {
        console.log('Country saved successfully');
      } else {
        console.error('Failed to save country');
      }
    } catch (error) {
      console.error('Error saving country:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">Select a country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select</option>
        {countries.map((country, index) => (
          <option key={index} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CountryForm;

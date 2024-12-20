'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  useEffect(() => {
    fetch(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
    )
      .then((response) => response.json())
      .then((data) => setVehicleMakes(data.Results))
      .catch((error) => console.error('Error fetching vehicle makes:', error));
  }, []);

  useEffect(() => {
    setIsNextEnabled(selectedMake && selectedYear);
  }, [selectedMake, selectedYear]);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Vehicle Filter</h1>
      <div className="space-y-4">
        <div className="relative w-64">
          <select
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
            className="w-full p-2 pl-3 pr-8 border rounded shadow-sm appearance-none bg-white"
          >
            <option value="">Select Vehicle Make</option>
            {vehicleMakes.map((make) => (
              <option key={make.MakeId} value={make.MakeId}>
                {make.MakeName}
              </option>
            ))}
          </select>

          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 pointer-events-none">
            ▼
          </div>
        </div>

        <div className="relative w-64">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full p-2 pl-3 pr-8 border rounded shadow-sm appearance-none bg-white"
          >
            <option value="">Select Model Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 pointer-events-none">
            ▼
          </div>
        </div>
      </div>

      <Link
        href={isNextEnabled ? `/result/${selectedMake}/${selectedYear}` : '#'}
        className={`mt-6 px-4 py-2 rounded shadow text-white ${
          isNextEnabled
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default HomePage;

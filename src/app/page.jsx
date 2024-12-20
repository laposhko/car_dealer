"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const HomePage = () => {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  useEffect(() => {
    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    )
      .then((response) => response.json())
      .then((data) => setVehicleMakes(data.Results))
      .catch((error) => console.error("Error fetching vehicle makes:", error));
  }, []);

  useEffect(() => {
    setIsNextEnabled(selectedMake && selectedYear);
  }, [selectedMake, selectedYear]);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicle Filter</h1>
      <div className="space-y-4">
        <select
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="w-64 p-2 border rounded shadow-sm"
        >
          <option value="">Select Vehicle Make</option>
          {vehicleMakes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="w-64 p-2 border rounded shadow-sm"
        >
          <option value="">Select Model Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <Link
        href={isNextEnabled ? `/result/${selectedMake}/${selectedYear}` : "#"}
        className={`mt-6 px-4 py-2 rounded shadow text-white ${
          isNextEnabled
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default HomePage;

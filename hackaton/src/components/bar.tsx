"use client";
import React, { useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 100) {
      setPercentage(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <h2 className="text-2xl font-semibold mb-6">Progress bar</h2>

      <div className="relative w-80 h-6 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-pink-500 to-red-400 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>

        <div
          className="absolute top-1/2 -translate-y-1/2 text-white text-sm font-bold flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-400 shadow-lg"
          style={{ left: `calc(${percentage}% - 1.25rem)` }}
        >
          {percentage}%
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="input" className="text-lg font-medium">
          Input Percentage:
        </label>
        <input
          id="input"
          type="number"
          min="0"
          max="100"
          value={percentage}
          onChange={handleChange}
          className="ml-3 w-20 text-center border-2 border-gray-400 rounded-full px-2 py-1 focus:outline-none focus:border-black-500"
        />
      </div>
    </div>
  );
};

export default ProgressBar;

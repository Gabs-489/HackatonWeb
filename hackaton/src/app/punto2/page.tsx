"use client";
import React, { useState, useEffect } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    useEffect(() => {
      let timer: NodeJS.Timeout;

      if (isActive && timeLeft > 0) {
        timer = setTimeout(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000);
      } else if (timeLeft === 0) {
        setHasFinished(true);
      }
      return () => clearTimeout(timer);
    }, [isActive, timeLeft]);

    const handleClick = () => {
      if (!isActive) {
        setIsActive(true);
      }
      setCount((prev) => prev + 1);
    };

    const handleReset = () => {
      setCount(0);
      setTimeLeft(10);
      setIsActive(false);
      setHasFinished(false);
    };

    return (
      <div className="flex flex-col items-center justify-center h-1/4 bg-pink-500 text-center">
        <h2 className="text-2xl font-semibold mb-6">Click Counter</h2>
        <p className="text-lg mb-4">Time left: {timeLeft}s</p>
        <p className="text-lg mb-4">Click count: {count}</p>
        <button
          onClick={handleClick}
          className="bg-white-500 text-white px-2 py-2 border-2 border-black-500"
          disabled={hasFinished}
        >
          +
        </button>
        {hasFinished && (
          <div className="mt-4">
            <p className="text-lg font-semibold">Se acabó el tiempo</p>
            <p className="text-lg">Hiciste clic {count} veces.</p>
            <button
              onClick={handleReset}
              className="bg-white-500 text-white px-4 py-2 border-2 border-black-500"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  };

  export default ClickCounter;

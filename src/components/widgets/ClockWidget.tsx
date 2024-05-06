'use client';
import React, { useState, useEffect } from 'react';

const ClockInComponent = () => {
  const [isClockedIn, setClockedIn] = useState(false);
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState<number | null>(null);

  // Helper function to format time in hh:mm:ss
  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Format the current time in hh:mm:ss
  const formatCurrentTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Helper function to format dates in mm/dd/yyyy
  const formatDate = (date: Date): string => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  const handleClockIn = async () => {
    try {
      const response = await fetch('/api/clockIn', { method: 'POST' });
      if (!response.ok) {
        const errorData = await response.json(); // Assuming server sends JSON error details
        console.error('Failed to clock in:', errorData);
        throw new Error(errorData.error);
      }
      const data = await response.json();
      console.log("Clock in data:", data);
    } catch (error) {
      console.error("Error when attempting to clock in:", error);
    }
  };
  

  const handleClockOut = async () => {
    const res = await fetch('/api/clockOut', { method: 'POST' });
    const data = await res.json();
    if (!res.ok) {
      console.error('Failed to clock out:', data.error);
    } else {
      setClockedIn(false);
      setTimer(0);
      console.log(`Session ended. Total time clocked: ${data.duration} seconds`);
    }
  };

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeIntervalId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="text-lg text-neutral-600 dark:text-neutral-400" suppressHydrationWarning>
        {`Current Time: ${formatCurrentTime(currentTime)}`}
      </p>

      <h1 className="text-black dark:text-neutral-200 text-5xl">{isClockedIn ? 'Clocked In' : 'Clocked Out'}</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        {isClockedIn ? `Time Elapsed: ${formatTime(timer)}` : 'Click below to start working!'}
      </p>
      {isClockedIn && startTime && (
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {`Date: ${formatDate(startTime)}`}
          {new Date().getDate() !== startTime.getDate() && ` to ${formatDate(new Date())}`}
        </p>
      )}
      <div className="rounded-[22px] max-w-sm p-4 sm:p-10 px-8 pt-6 pb-8 flex flex-col items-center">
        {isClockedIn ? (
          <button
            onClick={handleClockOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Clock Out
          </button>
        ) : (
          <button
            onClick={handleClockIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Clock In
          </button>
        )}
      </div>
    </div>
  );
};

export default ClockInComponent;

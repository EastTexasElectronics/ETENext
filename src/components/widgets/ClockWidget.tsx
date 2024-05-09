// src/components/widgets/ClockWidget.tsx
'use client';
import React, { useState, useEffect } from 'react';

const ClockInComponent = () => {
  const [isClockedIn, setClockedIn] = useState(false);
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | number | null>(null);

  useEffect(() => {
    const storedClockInTime = localStorage.getItem('clockInTime');
    if (storedClockInTime) {
      setClockedIn(true);
      const parsedStartTime = new Date(storedClockInTime);
      setStartTime(parsedStartTime);
      const elapsed = Math.floor((new Date().getTime() - parsedStartTime.getTime()) / 1000);
      setTimer(elapsed);

      const newIntervalId = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(newIntervalId as NodeJS.Timeout); // Type assertion here
    }
  }, []);

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatDateTime = (date: Date): string => {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    const datePart = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm} on ${datePart}`;
  };

  const handleClockIn = async () => {
    try {
      const response = await fetch('/api/clockIn', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to clock in');
      }
      const data = await response.json();
      setClockedIn(true);
      const clockInTime = new Date();
      setStartTime(clockInTime);
      localStorage.setItem('clockInTime', clockInTime.toISOString());
      setTimer(0);
      const newIntervalId = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(newIntervalId as NodeJS.Timeout); // Type assertion here
    } catch (error) {
      console.error('Error when attempting to clock in:', error);
    }
  };

  const handleClockOut = async () => {
    if (intervalId) clearInterval(intervalId as NodeJS.Timeout); // Type assertion here
    setIntervalId(null);
    localStorage.removeItem('clockInTime');
    try {
      const response = await fetch('/api/clockOut', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to clock out');
      }
      setClockedIn(false);
      setTimer(0);
      setStartTime(null);
    } catch (error) {
      console.error('Error when attempting to clock out:', error);
    }
  };

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeIntervalId);
      if (intervalId) clearInterval(intervalId as NodeJS.Timeout); // 
    };
  }, [intervalId]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">

      <p className="text-lg text-neutral-600 dark:text-neutral-400" suppressHydrationWarning>
        {`Current Time: ${formatDateTime(currentTime)}`}
      </p>
      {startTime && (
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {`Clocked In At: ${formatDateTime(startTime)}`}
        </p>
      )}
      <h1 className="text-black dark:text-neutral-200 text-5xl">{isClockedIn ? 'Clocked In' : 'Clocked Out'}</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        {isClockedIn ? `Time Elapsed: ${formatTime(timer)}` : 'Click below to start working!'}
      </p>
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

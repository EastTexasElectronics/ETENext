// src/components/widgets/ClockWidget.tsx
'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { IconClockDollar, IconClockPause } from '@tabler/icons-react';
import { formatDateTime, formatTime } from '~/utils/utils';

/*
This file includes the implementation of the ClockInComponent,
it's a component that allows users to clock in and out and keep track of the time.
This is mainly used for tracking working hours.
 */

//  This function takes a date object and returns a string with the time and date formatted.
let ClockButton: React.NamedExoticComponent<{
  readonly isClockedIn?: any;
  readonly handleClockIn?: any;
  readonly handleClockOut?: any
}>;
// eslint-disable-next-line react/display-name
ClockButton = memo(({ isClockedIn, handleClockIn, handleClockOut }) => {
  return isClockedIn ? (
    // This button is displayed when the user is clocked in
    <button
      onClick={handleClockOut}
      className="w-full flex items-center justify-center bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-300"
    >
      <IconClockPause className="mr-2" /> Clock Out

    </button>
  ) : (
    // This button is displayed when the user is clocked out
    <button
      onClick={handleClockIn}
      className="w-full flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-300"
    >
      <IconClockDollar className="mr-2" /> Clock In
    </button>
  );
});
// This is a memoized version of the ClockButton component, which is used to prevent unnecessary re-renders.
const ClockInComponent = () => {
  const [isClockedIn, setClockedIn] = useState(false);
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // This is the main component that handles the clock in and clock out functionality.
  useEffect(() => {
    const storedClockInTime = localStorage.getItem('clockInTime');
    if (storedClockInTime) {
      setClockedIn(true);
      const parsedStartTime = new Date(storedClockInTime);
      setStartTime(parsedStartTime);
      setTimer((new Date().getTime() - parsedStartTime.getTime()) / 1000);
    }
  }, []);
  // This effect runs when the component mounts and checks if the user is already clocked in.
  useEffect(() => {
    const timerIntervalId = setInterval(() => {
      if (isClockedIn) {
        setTimer(prevTime => prevTime + 1);
      }
    }, 1000);
    return () => clearInterval(timerIntervalId);
  }, [isClockedIn]);
  //  This effect runs when the component mounts and starts a timer that increments every second.
  useEffect(() => {
    const timeInterval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timeInterval);
  }, []);
  //  This effect runs when the component mounts and updates the current time every second.
  const handleClockIn = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/clockIn', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to clock in');
      }
      const clockInTime = new Date();  // This is the function that handles the clock in functionality.
      localStorage.setItem('clockInTime', clockInTime.toISOString()); // This is the function that handles the clock in functionality.
      setClockedIn(true);
      setStartTime(clockInTime);
      setTimer(0);
    } catch (error) {
      setError('Error when attempting to clock in');
      console.error('Error when attempting to clock in:', error);
    }
    setLoading(false);
  }, []);

  const handleClockOut = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/clockOut', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to clock out');
      }
      localStorage.removeItem('clockInTime');
      setClockedIn(false);
      setTimer(0);
      setStartTime(null);
    } catch (error) {
      setError('Error when attempting to clock out');
      console.error('Error when attempting to clock out:', error);
    }
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
      <div className="bg-gray-900 rounded-lg shadow-xl p-6 m-4 w-full max-w-md space-y-4">
        {error && <p className="text-sm text-red-500">{error}</p>}
        <p className="text-sm text-gray-400">
          Current Time: {formatDateTime(currentTime)}
        </p>
        {startTime && (
          <p className="text-sm text-gray-400">
            Clocked In At: {formatDateTime(startTime)}
          </p>
        )}
        <h1 className="text-xl font-semibold text-blue-400">
          {isClockedIn ? 'Clocked In' : 'Clocked Out'}
        </h1>
        <p className="text-sm text-gray-400">
          {isClockedIn ? `Time Elapsed: ${formatTime(timer)}` : 'Click below to start working!'}
        </p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ClockButton isClockedIn={isClockedIn} handleClockIn={handleClockIn} handleClockOut={handleClockOut} />
        )}
      </div>
    </div>
  );
};

export default ClockInComponent;

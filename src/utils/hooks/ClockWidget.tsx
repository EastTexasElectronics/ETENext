'use client';
import { useState, useEffect } from 'react';



const ClockHook= () => {
    const [setClockedIn] = useState(false);
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    const handleClockIn = () => {
      const id = window.setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
      setClockedIn(true);
    };

    const handleClockOut = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      setClockedIn(false);
      console.log(`Total time clocked: ${timer} seconds`);
      setTimer(0);
    };

    useEffect(() => {
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [intervalId]);
};

export default ClockHook;

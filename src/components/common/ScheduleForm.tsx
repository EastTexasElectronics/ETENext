'use client';
import React, { useState } from 'react';

interface ScheduleItem {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

interface ScheduleFormProps {
  onAddSchedule: (newSchedule: ScheduleItem) => void;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({ onAddSchedule }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSchedule: ScheduleItem = {
      id: Math.random().toString(36).substring(2, 15), // Simple random ID
      title,
      start: new Date(start),
      end: new Date(end),
    };
    onAddSchedule(newSchedule);
    setTitle('');
    setStart('');
    setEnd('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>
          Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Start Date: <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          End Date: <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} required />
        </label>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Schedule
      </button>
    </form>
  );
};

export default ScheduleForm;
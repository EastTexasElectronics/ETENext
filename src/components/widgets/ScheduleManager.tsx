// ScheduleManager.tsx
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ScheduleForm from '../common/ScheduleForm';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface ScheduleItem {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

const ScheduleManager: React.FC = () => {
  const [events, setEvents] = useState<ScheduleItem[]>([]);

  const handleAddSchedule = (newSchedule: ScheduleItem) => {
    setEvents((prevEvents) => [...prevEvents, newSchedule]);
  };

  return (
    <div className="p-4">
      <ScheduleForm onAddSchedule={handleAddSchedule} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '500px', marginTop: '20px' }}
        views={['month', 'week', 'day', 'agenda']}
      />
    </div>
  );
};

export default ScheduleManager;
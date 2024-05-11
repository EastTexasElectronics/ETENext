// src/components/atoms/DateRagePicker.tsx
'use client';
import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import TimesheetTable from '../widgets/TimesheetTable';

const DateRangePicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="w-64">
        <Datepicker
          showShortcuts={true}
          separator={"-"}
          popoverDirection="down"
          showFooter={true}
          value={value}
          useRange={true}
          onChange={handleValueChange}
          placeholder={"Select Date Range"}
          displayFormat={'MM/DD/YY'}
        />
      </div>
      <div className="max-w-3xl">
      <TimesheetTable startDate={value.startDate} endDate={value.endDate} />
      </div>
    </div>
  );
};

export default DateRangePicker;

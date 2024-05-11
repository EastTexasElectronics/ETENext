// src/components/atoms/DateRagePicker.tsx
'use client';
import React, { useState } from 'react';
import DateRagePicker from '~/components/atoms/DateRagePicker';


const MyTimesheets = () => {

  return (
    <div>
      <h1>My TimeSheets</h1>
      <div className="">
        <DateRagePicker />
      </div>
    </div>
  );
};

export default MyTimesheets;

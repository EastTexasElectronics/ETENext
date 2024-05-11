// app/(dashboards)/user-dashboard/timesheets/page.tsx
import React from 'react';

import type { Metadata } from 'next';
import DateRangePicker from '~/components/atoms/DateRagePicker';


export const metadata: Metadata = {
  title: `Timesheets`,
  description: `View your clocked hours `,
};

const Timesheets: React.FC = () => {
  return (
    <>
      <DateRangePicker />
    </>
  );
};

export default Timesheets;

// app/(dashboards)/user-dashboard/timesheets/page.tsx
import React from 'react';

import type { Metadata } from 'next';
import TimesheetTable from '~/components/widgets/TimesheetTable';


export const metadata: Metadata = {
  title: `Timesheets`,
  description: `View your clocked hours `,
};

const Timesheets: React.FC = () => {
  return (
    <>
      <TimesheetTable />
    </>
  );
};

export default Timesheets;
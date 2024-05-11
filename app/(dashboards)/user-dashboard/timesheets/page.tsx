import React from 'react';
import TimesheetTable from '~/components/widgets/TimesheetTable';
import type { Metadata } from 'next';


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

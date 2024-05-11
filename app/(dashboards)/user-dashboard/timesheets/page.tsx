// app/(dashboards)/user-dashboard/timesheets/page.tsx
import React from 'react';

import type { Metadata } from 'next';
import MyTimesheets from '~/components/widgets/MyTimesheets';


export const metadata: Metadata = {
  title: `Timesheets`,
  description: `View your clocked hours `,
};

const Timesheets: React.FC = () => {
  return (
    <>
      <MyTimesheets />
    </>
  );
};

export default Timesheets;

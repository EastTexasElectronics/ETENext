// app/(dashboards)/user-dashboard/timesheets/page.tsx
import React from 'react';

import type { Metadata } from 'next';
import ManagedDigitalAssets from '~/components/widgets/ManagedDigitalAssets';


export const metadata: Metadata = {
  title: `Managed Digital Assets`,
  description: `View your services we manage `,
};

const DigitalAssets: React.FC = () => {
  return (
    <>
      <TimesheetTable />
    </>
  );
};

export default Timesheets;

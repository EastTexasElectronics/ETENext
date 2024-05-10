import React from 'react';
import ClockWidget from '~/components/widgets/ClockWidget';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: `Punch Clock`,
  description: `Clock in and out of work shifts. `,
};

const PunchClock: React.FC = () => {
  return (
    <>
      <ClockWidget />
    </>
  );
};

export default PunchClock;

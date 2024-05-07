'use client';

import Image from 'next/image';
import { Tabs } from '../ui/tabs';
import ClockWidget from '~/components/widgets/ClockWidget';
import  TimesheetTable  from '~/components/widgets/TimesheetTable';

export function TabsDemo() {
  const tabs = [
    {
      title: 'Punch Clock',
      value: 'punchClock',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary-900 to-violet-900 flex items-center justify-center">
          <div className="text-center">
            <ClockWidget />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="h-[20rem] md:h-[40rem] perspective:1000px relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-40">
        <Tabs tabs={tabs} />
      </div>
      <div>
        <TimesheetTable />
      </div>
    </div>
  );
}

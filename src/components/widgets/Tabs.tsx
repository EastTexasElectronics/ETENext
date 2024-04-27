'use client';
import React, { useState } from 'react';
import CompanyDetails from './CompanyDetails';
// import RequestFeed from './RequestFeed';
import ScheduleManager from './ScheduleManager';
import DigitalAssets from './DigitalAssets';

type TabContent = {
  'Company Details': JSX.Element;
  'Digital Assets': JSX.Element;
  'Leave Requests': JSX.Element;
  Appointments: JSX.Element;
  Schedules: JSX.Element;
  'Time Tracker': JSX.Element;
};

const Tabs: React.FC = () => {
  const tabs: (keyof TabContent)[] = ['Company Details', 'Leave Requests', 'Appointments', 'Schedules', 'Time Tracker', 'Digital Assets'];

  const [activeTab, setActiveTab] = useState<keyof TabContent>(tabs[0]);

  const handleTabClick = (tab: keyof TabContent) => {
    setActiveTab(tab);
  };

  const tabContent: TabContent = {
    'Company Details': <CompanyDetails />,
    'Digital Assets': <DigitalAssets />,
    'Leave Requests':  <div>Content for Appointments</div>,
    Appointments: <div>Content for Appointments</div>,
    Schedules: <ScheduleManager />,
    'Time Tracker': <div>Content for Time Tracker</div>,
  };

  return (
    <div className="my-8 mx-auto w-3/4">
      {/* TODO why is this making a line?  Can we Remove it? */}
      <ul className="flex justify-center gap-4 border-b-2 dark:border-gray-700">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer py-2 px-4 ${
              activeTab === tab
                ? 'bg-blue-600 dark:bg-blue-700 text-white'
                : 'text-black dark:text-white dark:hover:text-gray-200 hover:text-gray-700'
            } hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors duration-300`}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="p-4 bg-white dark:bg-slate-700 rounded-md shadow-md">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
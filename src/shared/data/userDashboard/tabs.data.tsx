import React from 'react';
import Tab from './tab.data';

const Tabs: React.FC = () => {
  const tabs = [
    'Personal',
    'Job',
    'Leave',
    'Emergency',
    'Document',
    'Notes',
    'Benefits',
    'Training',
    'Performance',
    'Assets',
  ];
  return (
    <ul className="flex bg-white">
      {tabs.map((tab) => (
        <Tab label={tab} key={tab} />
      ))}
    </ul>
  );
};

export default Tabs;

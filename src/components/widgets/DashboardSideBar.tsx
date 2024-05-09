'use client';
import React, { useState } from 'react';
import {
  IconUser,
  IconSettings,
  IconHelpCircle,
  IconMenu,
  IconClock,
  IconCalendar,
  IconDatabase,
  IconDatabaseOff,
  IconCalendarTime,
  IconAsset,
  IconChevronDown,
} from '@tabler/icons-react';

interface DashboardSidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isExpanded, toggleSidebar }) => {
  const [showTimeMgmt, setShowTimeMgmt] = useState(false);
  const [showDigitalAssets, setShowDigitalAssets] = useState(false);

  return (
<div className={`flex flex-col bg-gray-800 text-white ${isExpanded ? 'w-64' : 'w-16'} transition-width duration-300 ease-in-out`} style={{ minHeight: 'calc(100vh - 100px)' }}>
      <button className="p-4 focus:outline-none hover:bg-gray-700" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        <IconMenu size={30} className="text-gray-300" />
      </button>
      {/* Section for time management tools */}
      <div className="flex flex-col">
        <button className="flex items-center p-4 hover:bg-gray-700" onClick={() => setShowTimeMgmt(!showTimeMgmt)}>
          <IconClock size={24} className="text-gray-300" />
          {isExpanded && <span className="ml-2">Time Management</span>}
          {isExpanded && <IconChevronDown className="ml-auto" />}
        </button>
        {showTimeMgmt && (
          <div className="ml-4">
            {/* Sub-items under time management */}
            <a className="flex items-center p-4 hover:bg-gray-700" href="/punch-clock">
              <IconClock size={24} className="text-gray-300" />
              <span className="ml-2">Punch Clock</span>
            </a>
            <a className="flex items-center p-4 hover:bg-gray-700" href="/timesheets">
              <IconCalendar size={24} className="text-gray-300" />
              <span className="ml-2">Timesheets</span>
            </a>
            <a className="flex items-center p-4 hover:bg-gray-700" href="/schedule">
              <IconCalendarTime size={24} className="text-gray-300" />
              <span className="ml-2">Schedule</span>
            </a>
          </div>
        )}
      </div>
      {/* Section for digital assets management */}
      <div className="flex flex-col">
        <button
          className="flex items-center p-4 hover:bg-gray-700"
          onClick={() => setShowDigitalAssets(!showDigitalAssets)}
        >
          <IconAsset size={24} className="text-gray-300" />
          {isExpanded && <span className="ml-2">Digital Assets</span>}
          {isExpanded && <IconChevronDown className="ml-auto" />}
        </button>
        {showDigitalAssets && (
          <div className="ml-4">
            {/* Sub-items under digital assets */}
            <a className="flex items-center p-4 hover:bg-gray-700" href="/managed-assets">
              <IconDatabase size={24} className="text-gray-300" />
              <span className="ml-2">Managed Assets</span>
            </a>
            <a className="flex items-center p-4 hover:bg-gray-700" href="/unmanaged-assets">
              <IconDatabaseOff size={24} className="text-gray-300" />
              <span className="ml-2">Unmanaged Assets</span>
            </a>
          </div>
        )}
      </div>

      {/* User icons at the bottom */}
      <div className="mt-auto flex w-full justify-around p-2 bg-gray-700">
        <a href="/profile" className="hover:text-gray-300" title="Profile">
          <IconUser size={24} className={`text-gray-300 ${!isExpanded && 'mx-auto'}`} />
          {isExpanded && <span>Profile</span>}
        </a>
        <a href="/settings" className="hover:text-gray-300" title="Settings">
          <IconSettings size={24} className={`text-gray-300 ${!isExpanded && 'mx-auto'}`} />
          {isExpanded && <span>Settings</span>}
        </a>
        <a href="/help" className="hover:text-gray-300" title="Help">
          <IconHelpCircle size={24} className={`text-gray-300 ${!isExpanded && 'mx-auto'}`} />
          {isExpanded && <span>Help</span>}
        </a>
      </div>
    </div>
  );
};

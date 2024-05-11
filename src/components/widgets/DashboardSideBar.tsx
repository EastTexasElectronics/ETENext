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
import URLs from '~/utils/constants/urls';
import { DashboardSidebarProps } from '~/shared/types'

export const DashboardSidebar: React.FC<DashboardSidebarProps> = (x) => {
  const [showTimeMgmt, setShowTimeMgmt] = useState(false);
  const [showDigitalAssets, setShowDigitalAssets] = useState(false);
  return (
    <div
      className={`flex flex-col bg-gray-900 text-gray-100 ${x.isExpanded ? 'w-64' : 'w-16'} transition-all duration-300 ease-in-out`}
      style={{ minHeight: '100vh' }}>
      <button className="p-4 focus:outline-none hover:bg-gray-700" onClick={x.toggleSidebar}
              aria-label="Toggle Sidebar">
        <IconMenu size={30} className="text-gray-300" />
      </button>
      <div className="flex flex-col space-y-1">
        {/* Time Management Section */}
        <div className="group">
          <button className="flex items-center p-4 w-full text-left hover:bg-gray-700"
                  onClick={() => setShowTimeMgmt(!showTimeMgmt)}>
            <IconClock size={24} className="text-gray-300" />
            {x.isExpanded && <span className="ml-2 text-xs flex-1">Time Management</span>}
            {x.isExpanded && <IconChevronDown className="transition-transform transform group-hover:rotate-180" />}
          </button>
          {showTimeMgmt && (
            <div className="ml-4">
              <a className="flex items-center p-4 hover:bg-gray-700" href={URLs.PUNCH_CLOCK}>
                <IconClock size={24} className="text-gray-300" />
                <span className="ml-2 text-xs">Punch Clock</span>
              </a>
              <a className="flex items-center p-4 hover:bg-gray-700" href={URLs.TIMESHEETS}>
                <IconCalendar size={24} className="text-gray-300" />
                <span className="ml-2 text-xs">Timesheets</span>
              </a>
              <a className="flex items-center p-4 hover:bg-gray-700" href={URLs.SCHEDULE}>
                <IconCalendarTime size={24} className="text-gray-300" />
                <span className="ml-2 text-xs">Schedule</span>
              </a>
            </div>
          )}
        </div>
        {/* Digital Assets Management Section */}
        <div className="group">
          <button className="flex items-center p-4 w-full text-left hover:bg-gray-700"
                  onClick={() => setShowDigitalAssets(!showDigitalAssets)}>
            <IconAsset size={24} className="text-gray-300" />
            {x.isExpanded && <span className="ml-2 text-xs flex-1">Digital Assets</span>}
            {x.isExpanded && <IconChevronDown className="transition-transform transform group-hover:rotate-180" />}
          </button>
          {showDigitalAssets && (
            <div className="ml-4">
              <a className="flex items-center p-4 hover:bg-gray-700" href="/managed-assets">
                <IconDatabase size={24} className="text-gray-300" />
                <span className="ml-2 text-xs">Managed Assets</span>
              </a>
              <a className="flex items-center p-4 hover:bg-gray-700" href="/unmanaged-assets">
                <IconDatabaseOff size={24} className="text-gray-300" />
                <span className="ml-2 text-xs">Unmanaged Assets</span>
              </a>
            </div>
          )}
        </div>
      </div>
      {/* User icons at the bottom */}
      <div className="mt-auto flex w-full justify-around p-2 bg-gray-700">
        <a href="/profile" className="hover:text-gray-300 text-xs" title="Profile">
          <IconUser size={24} className={`text-gray-300 text-xs ${!x.isExpanded && 'mx-auto'}`} />
          {x.isExpanded && <span>Profile</span>}
        </a>
        <a href="/settings" className="hover:text-gray-300 text-xs" title="Settings">
          <IconSettings size={24} className={`text-gray-300 text-xs ${!x.isExpanded && 'mx-auto'}`} />
          {x.isExpanded && <span>Settings</span>}
        </a>
        <a href="/help" className="hover:text-gray-300 text-xs" title="Help">
          <IconHelpCircle size={24} className={`text-gray-300 text-xs ${!x.isExpanded && 'mx-auto'}`} />
          {x.isExpanded && <span>Help</span>}
        </a>
      </div>
    </div>
  );
};

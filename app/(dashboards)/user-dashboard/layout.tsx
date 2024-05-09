'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { DashboardSidebar } from '../../../src/components/widgets/DashboardSideBar';
import { DashboardHeader } from '../../../src/components/widgets/DashboardHeader';

interface UserDashboardLayoutProps {
  children: ReactNode; // Specify that children can be any valid React node
}

const UserDashboardLayout: React.FC<UserDashboardLayoutProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-primary-100 dark:bg-secondary-800 text-white">
      {!isMobile && <DashboardSidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />}
      <div className="flex flex-col w-full">
        <DashboardHeader />
        <main className="flex-grow p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;

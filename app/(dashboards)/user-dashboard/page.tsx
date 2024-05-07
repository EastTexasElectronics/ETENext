import React from 'react';
import { TabsDemo } from '~/components/widgets/Tabs';
import type { Metadata } from 'next';
import CPortalHeader from '~/components/widgets/CPortalHeader';

export const metadata: Metadata = {
  title: `User Dashboard`,
  description: `Your Dashboard to manage your account.`,
};

const UserDashboard: React.FC = () => {
  return (
    <>
      <CPortalHeader />
      <div className="min-h-screen">
        <TabsDemo />
      </div>
    </>
  );
};

export default UserDashboard;

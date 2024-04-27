import React from 'react';
import Tabs from '~/components/widgets/Tabs';
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
        <Tabs />
      </div>
    </>
  );
};

export default UserDashboard;

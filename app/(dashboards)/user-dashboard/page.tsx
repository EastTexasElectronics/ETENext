import React from 'react';
// import Navigation from '~/components/widgets/userDashboard/Navigation';
import Tabs from '~/components/widgets/userDashboard/Tabs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `User Dashboard`,
  description: `Your Dashboard to manage your account.`,
};

const UserDashboard: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <Tabs />
    </div>
  );
};

export default UserDashboard;

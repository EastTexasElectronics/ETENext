import React from 'react';
import Tabs from '~/components/widgets/Tabs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `User Dashboard`,
  description: `Your Dashboard to manage your account.`,
};

const UserDashboard: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Tabs />
    </div>
  );
};

export default UserDashboard;

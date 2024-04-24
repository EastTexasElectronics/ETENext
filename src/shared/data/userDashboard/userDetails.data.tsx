import React from 'react';
import UserDetailItem from './userDetailItem.data';

const UserDetails: React.FC = () => {
  return (
    <div className="p-3">
      <ul className="-mt-3 text-sm font-semibold text-gray-500 hover:text-gray-700 py-2 px-3 mt-3 divide-y rounded bg-white">
        <UserDetailItem label1="801-724-6600 Ext.1272" label2="415-555-8965" />
        <UserDetailItem label1="Hire date" label2="Jan 19 2017" extra="10m - 15d" />
        <UserDetailItem label1="Full-time" label2="Human Resources" extra="North America" more="Lindon, Utah" />
      </ul>
    </div>
  );
};

export default UserDetails;

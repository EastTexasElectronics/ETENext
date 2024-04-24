import React from 'react';
import UserDetailItem from './UserDetailItem';

const UserDetails: React.FC = () => {
  return (
    // Flex-grow on large screens with a basis of 1/4 the container's width
    <div className="flex-grow md:flex md:basis-1/4 p-3">
      <ul className="text-sm font-semibold text-gray-500 py-2 px-3 divide-y rounded dark:bg-slate-900 dark:text-white">
        <UserDetailItem label1="Company Phone" label2="415-555-8965" extra="415-555-8965" more="Manager's Cell"/>
        <UserDetailItem label1="123 Something Blvd." label2="75650"  more="Hallsville, TX"/>
        <UserDetailItem label1="External Links:" label2="OurWebsite.com" />
      </ul>
    </div>
  );
};

export default UserDetails;

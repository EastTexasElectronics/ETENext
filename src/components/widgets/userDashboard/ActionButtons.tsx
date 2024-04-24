// Currently Unused

import React from 'react';
const ActionButtons: React.FC = () => {
  return (
    <div className="flex space-x-4 lg:block md:block">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">Request a Change</button>
      <button className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-md">Settings</button>
    </div>
  );
};

export default ActionButtons;

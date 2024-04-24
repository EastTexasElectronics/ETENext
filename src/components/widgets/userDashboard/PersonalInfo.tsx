import React from 'react';

const PersonalInfo: React.FC = () => {
  return (
    <div className="bg-white p-3 rounded-sm">
      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span className="text-green-500">{/* SVG Icon here */}</span>
        <span className="tracking-wide px-2">Personal</span>
      </div>
      <div className="flex my-2 py-1">
        <span className="tracking-wide px-2 bg-blue-500 text-white rounded-md shadow-xl">Upload</span>
        <span className="tracking-wide px-2">Files</span>
      </div>
    </div>
  );
};

export default PersonalInfo;

import React from 'react';

interface ProfileHeaderProps {
  name: string;
  role: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, role }) => {
  return (
    <div className="bg-blue-300 max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-sans tracking-tight text-gray-900">{name}</h1>
      <p className="ml-10">{role}</p>
    </div>
  );
};

export default ProfileHeader;

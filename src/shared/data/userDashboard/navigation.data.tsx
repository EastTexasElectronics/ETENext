import React from 'react';
import NavLink from './navLink.data';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="#" label="Home" isActive />
                <NavLink to="#" label="My info" />
                <NavLink to="#" label="Employees" />
                <NavLink to="#" label="Pricing" />
                <NavLink to="#" label="Blogs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

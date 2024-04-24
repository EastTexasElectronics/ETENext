import React from 'react';

interface NavLinkProps {
  to: string;
  label: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, isActive = false }) => {
  const className = isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
  return (
    <a
      href={to}
      className={`${className} rounded-md px-3 py-2 text-sm font-medium`}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </a>
  );
};

export default NavLink;

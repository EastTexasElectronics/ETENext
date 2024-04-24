import React from 'react';

interface TabProps {
  label: string;
}

const Tab: React.FC<TabProps> = ({ label }) => {
  return (
    <li className="mr-1">
      <a className="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
        {label}
      </a>
    </li>
  );
};

export default Tab;

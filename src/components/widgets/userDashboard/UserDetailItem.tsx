import React from 'react';

interface UserDetailItemProps {
  label1: string;
  label2: string;
  extra?: string;
  more?: string;
}

const UserDetailItem: React.FC<UserDetailItemProps> = ({ label1, label2, extra, more }) => {
  return (
    <li className="items-center py-3">
      <span>{label1}</span>
      {extra && <><br /><span className="ml-auto">{extra}</span></>}
      {more && <><br /><span className="ml-auto">{more}</span></>}
      <br />
      <span className="ml-auto">{label2}</span>
    </li>
  );
};

export default UserDetailItem;

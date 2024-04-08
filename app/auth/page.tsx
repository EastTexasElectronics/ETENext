import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../utils/auth';
import React from 'react';


export default async function AuthRoute() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect('/');
  }

  interface CardProps {
    title: string;
    children: React.ReactNode;
  }

  const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {children}
        </div>
      </div>
    );
  };
}

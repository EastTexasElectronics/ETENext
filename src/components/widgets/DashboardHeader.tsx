import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import URLs from '../../utils/constants/urls';
import Image from 'next/image';
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode';

/**
 * Header component that displays the top navigation bar,
 * user sign-in state, and dynamic user information.
 */
const DashboardHeader = () => {
  const { firstName, lastName, isSignedIn } = useUser();

  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center w-full">
      <div className="flex items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          {isSignedIn && firstName && lastName && (
            <h1 className="text-lg font-bold ml-4">Hi, {firstName} {lastName}!</h1>
          )}
        </SignedIn>
      </div>
      <Image 
        src="/assets/images/Brand Kit/Logo Files/Logo_Blue_White/Logo_Blue_White.png"
        alt="Company Logo"
        width={100}
        height={50}
        onClick={() => window.location.href = URLs.HOME}
        className="cursor-pointer"
      />
      <nav>
        <ToggleDarkMode />
        <a href={URLs.APPOINTMENT} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Book an Appointment
        </a>
      </nav>
    </div>
  );
};

export default DashboardHeader;

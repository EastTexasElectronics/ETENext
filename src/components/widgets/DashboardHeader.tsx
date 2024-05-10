import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import URLs from '../../utils/constants/urls';
import Image from 'next/image';
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode';
import Logo from '../../assets/images/Brand Kit/Logo Files/Logo_Blue_White/Logo_Blue_White.png';

/**
 * Header component that displays the top navigation bar,
 * user sign-in state, and dynamic user information.
 * Enhanced for mobile responsiveness and accessibility.
 */
const DashboardHeader: React.FC = () => {
  const { isLoaded, isSignedIn, user } = useUser(); // Accessing the user object

  // Ensure the user data is loaded and user is signed in
  if (!isLoaded || !isSignedIn) {
    return null;  // Or handle loading state appropriately
  }

  return (
    <header className="bg-gray-900 text-white p-4 flex flex-wrap justify-between items-center w-full">
      <div className="flex items-center flex-1">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          {/* Dynamically display user's first and last names if available */}
          {user && (
            <h1 className="text-sm font-bold ml-4 hidden sm:block">Hi, {user.firstName} {user.lastName}!</h1>
          )}
        </SignedIn>
      </div>
      <div className="flex items-center justify-center sm:justify-start flex-1">
        <Image
          src={Logo}
          alt="Company Logo"
          width={100}
          height={50}
          onClick={() => window.location.href = URLs.HOME}
          className="cursor-pointer"
        />
      </div>
      <nav className="flex items-center justify-end flex-1">
        <ToggleDarkMode />
        <a href={URLs.APPOINTMENT}
           className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
           aria-label="Book an Appointment">
          Book an Appointment
        </a>
      </nav>
    </header>
  );
};

export default DashboardHeader;

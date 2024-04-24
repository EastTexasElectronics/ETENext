// AuthComponent.tsx
import React from 'react';
import URLs from '~/constants/urls';

const AuthComponent: React.FC = () => {
  return (
    <div className="flex items-center p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden  rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        {/* Sidebar */}
        <div className="p-4 py-6  text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <span>East Texas Electronics, LLC.</span>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Login to access your account, manage your dashboard, appointments, and more.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don&apos;t have an account?</span>
            <a href={URLs.NEW_USER} className="underline">
              Get Started!
            </a>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{' '}
            <a href={URLs.TERMS} className="underline">
              terms and conditions
            </a>{' '}
            and our{' '}
            <a href={URLs.PRIVACY} className="underline">
              privacy policy
            </a>
          </p>
        </div>
        {/* Form */}
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primary-500 rounded-md shadow hover:bg-primary-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Log In
              </button>
            </div>
            {/* Social Login */}
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              {/* Social Buttons Here */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;

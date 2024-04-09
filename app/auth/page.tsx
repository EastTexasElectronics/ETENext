import React from 'react';
import SignInForm from '../../src/components/widgets/SignInForm';

export default function AuthRoute() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

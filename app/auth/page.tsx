import React from 'react';
import SignInForm from '../../src/components/widgets/SignInForm';

export default function AuthRoute() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="card-normal w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sign In</h2>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

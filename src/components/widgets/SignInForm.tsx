// SignInForm.tsx
import { IconBrandWindows, IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import Image from 'next/image';

const SignInForm: React.FC = () => {
    return (
      <div className="flex flex-col items-center">
        <Image src="/path/to/logo.svg" alt="Company Logo" width={47} height={40} className="mb-5" />
        <h1 className="text-xl font-bold text-center mb-6">Sign in to your account</h1>
        <div className="w-full space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-bold">Email</label>
            <input type="email" name="email" placeholder="mehedi@jaman.com" className="mt-1 w-full rounded-md border px-5 py-2" />
          </div>
          <button type="submit" className="mt-4 w-full rounded-md py-2 font-bold">
            Login
          </button>
          <p className="text-center text-sm">Or continue with</p>
          <div className="flex gap-4">
            <button className="flex w-1/2 items-center justify-center gap-2 rounded-md py-1 font-bold">
              <IconBrandWindows size={24} />
              <span>Microsoft</span>
            </button>
            <button className="flex w-1/2 items-center justify-center gap-2 rounded-md py-1 font-bold">
              <IconBrandGoogle size={24} />
              <span>Google</span>
            </button>
            <button className="flex w-1/2 items-center justify-center gap-2 rounded-md py-1 font-bold">
              <IconBrandGithub size={24} />
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
   
  );
};

export default SignInForm;

import Image from 'next/image';

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/your-logo.svg"
            alt="Your Logo"
            width={250}
            height={150}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Tech Support & Electronics Repairs</h1>
            <p className="py-6">
              Providing top-notch support and repair services for all your tech needs. Your gadgets are in good hands.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

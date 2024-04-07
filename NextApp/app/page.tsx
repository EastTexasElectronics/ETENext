
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src="/your-logo.svg" alt="Your Logo" width={250} height={150} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Tech Support & Electronics Repairs</h1>
            <p className="py-6">Providing top-notch support and repair services for all your tech needs. Your gadgets are in good hands.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <Image src="/service-1.svg" alt="Service 1" width={100} height={100} className="w-full" />
                <div className="p-8">
                  <h3 className="font-semibold text-xl mb-4">Device Repairs</h3>
                  <p>Expert repairs for phones, laptops, and more. We fix it all.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <Image src="/service-2.svg" alt="Service 2" width={100} height={100} className="w-full" />
                <div className="p-8">
                  <h3 className="font-semibold text-xl mb-4">Tech Support</h3>
                  <p>Need help setting up or troubleshooting? Our team is here for you.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <Image src="/service-3.svg" alt="Service 3" width={100} height={100} className="w-full" />
                <div className="p-8">
                  <h3 className="font-semibold text-xl mb-4">Custom Builds</h3>
                  <p>From gaming rigs to office setups, we build PCs tailored to your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-base-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your email</span>
                </label>
                <input type="text" placeholder="Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">How can we help you?</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

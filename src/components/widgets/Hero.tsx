import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2 }: HeroProps) => {
  return (
    <section id="heroOne" className="bg-opacity-90 transition-all duration-500 ease-in-out">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 lg:py-28">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {tagline && (
              <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200 animate-pulse">
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="mt-2 mb-4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-heading leading-none md:leading-tight lg:leading-tighter text-gray-900 dark:text-white shadow-sm transition-all duration-300 ease-in-out">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && (
                <p className="mb-6 text-lg md:text-xl font-light text-gray-600 dark:text-slate-400 transition-opacity duration-500">
                  {subtitle}
                </p>
              )}
              <div className="flex flex-col gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary shadow-lg transform hover:scale-105 transition-transform duration-300" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn btn-secondary shadow transform hover:scale-105 transition-transform duration-300" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

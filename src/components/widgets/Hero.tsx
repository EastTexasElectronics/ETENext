import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne" className="relative overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover opacity-50"
            src={image.src}
            alt={image.alt}
            layout="responsive"
            sizes="100vw"
            loading="eager"
            priority
            placeholder="blur"
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          {tagline && (
            <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
              {tagline}
            </p>
          )}
          {title && (
            <h1 className="mb-6 text-4xl font-bold leading-tighter tracking-tighter text-black dark:text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
          )}
          {subtitle && <p className="mb-6 text-xl font-normal text-gray-300">{subtitle}</p>}
          <div className="flex flex-col gap-4 px-4 sm:flex-row sm:justify-center">
            {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
            {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

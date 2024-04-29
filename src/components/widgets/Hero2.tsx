import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero2 = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section className="relative mt-[-72px] bg-primary-50 dark:bg-secondary-800 overflow-hidden" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
        <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
          <div className="mx-auto flex max-w-5xl basis-[56%] items-center">
            <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-200">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-none mb-4 px-4 text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-600 dark:to-primary-300 md:px-0 md:text-[3.48rem]">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && (
                  <div className="mb-8 text-xl font-normal text-gray-600 dark:text-secondary-400">{subtitle}</div>
                )}
                <div className="flex max-w-none flex-col flex-nowrap justify-center gap-4 sm:flex-row md:m-0 md:justify-start">
                  {callToAction && (
                    <CTA
                      callToAction={callToAction}
                      containerClass="shadow-lg hover:scale-105 transition-transform duration-300"
                      linkClass="btn btn-primary"
                    />
                  )}
                  {callToAction2 && (
                    <CTA
                      callToAction={callToAction2}
                      containerClass="shadow-lg hover:scale-105 transition-transform duration-300"
                      linkClass="btn"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="block flex-1 items-center md:flex">
            <div className="relative m-auto h-full max-w-4xl object-cover hidden md:block">
              {image && (
                <Image
                  className="mx-auto h-full w-auto rounded-md bg-gray-400 object-cover drop-shadow-2xl dark:bg-secondary-700 hover:scale-105 transition-transform duration-500"
                  src={image.src}
                  alt={image.alt}
                  sizes="(min-width: 1920px) 749px, (min-width: 1540px) 43.89vw, (min-width: 1360px) 542px, (min-width: 780px) calc(39.29vw + 16px), calc(96.52vw - 22px)"
                  loading="eager"
                  placeholder="blur"
                  priority={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

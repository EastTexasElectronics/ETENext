/**
 * Renders the HomeHero component.
 *
 * @returns JSX.Element representing the HomeHero component.
 */
import React from 'react';
import BookingButton from '../atoms/BookingButton';
import LearnMoreButton from '../atoms/LearnMoreButton';
import { TextGenerateEffect } from '../atoms/TextGenerateEffect';

export function HomeHero() {
  return (
    <div className="h-[30rem] w-full dark:bg-secondary-800 bg-white dark:bg-grid-white/[0.2] bg-grid-secondary-950/[0.6] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-secondary-950 bg-primary-100"
        style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)' }}
      ></div>
      {/* Title using semantic heading and responsive font sizes */}
      <header className="flex flex-col items-center justify-center space-y-6 relative z-20 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b to-primary-400 from-primary-500 dark:from-primary-100 dark:to-primary-500 pt-8 pb-1">
          Tech Solutions Hub:
          <br />
          Services and Solutions Await
        </h1>
        {/* Subtitle with accessible animation */}
        <div aria-hidden="true">
          <TextGenerateEffect
            className="font-bold text-center tracking-wide text-secondary-900 dark:text-fuchsia-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            words={[
              'Electronic Repairs',
              'IT Support',
              'Data Management & Recovery',
              'Website & Software Development',
              'E-Waste Recycling',
              'Infrastructure',
            ]}
          />
        </div>
        {/* Call to action buttons with proper spacing for touch targets */}
        <div className="flex space-x-4 mt-4">
          <BookingButton />
          <LearnMoreButton />
        </div>
      </header>
    </div>
  );
}

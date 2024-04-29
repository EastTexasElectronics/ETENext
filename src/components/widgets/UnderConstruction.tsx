'use client';
import React, { useState } from 'react';
import { BackgroundGradient } from '../atoms/BackgroundGradient';
import { IconXboxX } from '@tabler/icons-react';
import Image from 'next/image';
import GIF from '../../assets/images/UnderConstruction.gif';

export function UnderConstruction() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <BackgroundGradient containerClassName="max-w-sm mx-auto rounded-xl overflow-hidden">
        <div className="relative p-6 flex flex-col items-center text-center bg-white dark:bg-zinc-900 rounded-lg">
          <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-white p-1">
            <IconXboxX size={24} />
          </button>
          <Image
            src={GIF}
            alt="Under Construction"
            height={400}
            width={400}
            className="object-contain"
            unoptimized={true}
          />
          <p className="text-base sm:text-xl mt-4 mb-2 dark:text-neutral-200">Under Construction</p>
          <p className="text-sm dark:text-neutral-400">
            We are in the middle of separating our services and eCommerce websites. To visit our active site click the
            button below.
          </p>
          <button className="rounded-full bg-black dark:bg-zinc-800 text-white flex items-center justify-center px-4 py-2 mt-4 text-xs font-bold space-x-2">
            <a href="https://www.easttexaselectronics.com" target="_blank" rel="noreferrer">
              Visit Active Site
            </a>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">❤️</span>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}

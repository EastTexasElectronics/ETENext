import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to format a number in thousands (K) or millions (M) format depending on its value
export const getSuffixNumber = (number: number, digits: number = 1): string => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const lookupItem = lookup
    .slice()
    .reverse()
    .find((item) => number >= item.value);
  return lookupItem ? (number / lookupItem.value).toFixed(digits).replace(rx, '$1') + lookupItem.symbol : '0';
};

export const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

/*
A helper function that takes number of seconds and formats it to a string of hours, minutes and seconds.
*/
export const formatDateTime = (date: Date): string => `${date.toLocaleTimeString()} on ${date.toLocaleDateString()}`;


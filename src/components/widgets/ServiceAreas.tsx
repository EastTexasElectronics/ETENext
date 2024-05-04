'use client';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import React, { useState } from 'react';
import ServiceAreaMap from '../../assets/images/ServiceAreaMap.png';
import LargeServiceAreaMap from '../../assets/images/LargeServiceAreaMap.png';

export function ServiceAreas() {
  const [isMapOpen, setMapOpen] = useState(false);

  const toggleMap = () => setMapOpen(!isMapOpen);

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-secondary-900 bg-primary-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col">
      <Card className="max-w-md w-full mx-auto p-4 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-secondary-950 dark:text-secondary-100 text-center">
            Service Area
          </CardTitle>
          <p className="text-secondary-950 dark:text-secondary-100 text-sm mt-2">
            Free travel within 10 miles of our location; $0.87/mile travel fee beyond.
          </p>
        </CardHeader>
        <CardContent className="text-secondary-950 dark:text-secondary-100">
          <div
            className="space-y-4 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={toggleMap}
            title="Click to view larger map"
          >
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image src={ServiceAreaMap} alt="Service Area Map" layout="fill" objectFit="contain" />
            </div>
          </div>
        </CardContent>
      </Card>
      {isMapOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleMap}>
          <div className="p-4 rounded-lg max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-lg font-bold text-red-500" onClick={toggleMap}>
              &times;
            </button>
            <div style={{ position: 'relative', width: 'auto', height: '80vh' }}>
              <Image src={LargeServiceAreaMap} alt="Large Service Area Map" layout="fill" objectFit="contain" />
            </div>
            <button
              className="mt-2 text-sm text-blue-700 hover:text-blue-900 font-semibold block mx-auto py-2 px-4 bg-gray-200 rounded"
              onClick={toggleMap}
            >
              Close Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

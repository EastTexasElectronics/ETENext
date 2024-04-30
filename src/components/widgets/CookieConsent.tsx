"use client";

import React, { useState, useEffect } from 'react';
import CookieSettings from '../common/CookieSettings';

const CookieConsent: React.FC = () => {
  // State for managing visibility of the banner and settings modal
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  // State for managing cookie preferences
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Effect to load cookie preferences from localStorage or show the banner
  useEffect(() => {
    const cookiePrefs = localStorage.getItem('cookiePrefs');
    if (cookiePrefs) {
      setCookies(JSON.parse(cookiePrefs));
    } else {
      setShowBanner(true);
    }
  }, []);

  // Handles the acceptance of all cookies
  const handleAccept = () => {
    const defaultPrefs = { necessary: true, analytics: true, marketing: true };
    setCookies(defaultPrefs);
    localStorage.setItem('cookiePrefs', JSON.stringify(defaultPrefs));
    setShowBanner(false);
  };

  return (
    <div>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 bg-gray-800 text-white p-4 text-center z-50">
          <p>We use cookies to improve your experience. By continuing, you agree to our <a href="/cookie-policy" className="underline">cookie policy</a>.</p>
          <button onClick={handleAccept} className="bg-blue-500 hover:bg-blue-700 rounded px-4 py-2 m-2">Accept All</button>
          <button onClick={() => setShowSettings(true)} className="bg-gray-300 text-gray-800 hover:bg-gray-400 rounded px-4 py-2 m-2">Cookie Settings</button>
        </div>
      )}
      {showSettings && <CookieSettings onSave={setCookies} initialCookies={cookies} setShowSettings={setShowSettings} />}
    </div>
  );
};

export default CookieConsent;

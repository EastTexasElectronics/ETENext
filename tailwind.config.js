const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue, // You might want to specify a shade here, like colors.blue[500]
        secondary: colors.amber, // Changed to amber for an actual secondary color; adjust as needed
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // Combined the plugins into a single array
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
  darkMode: 'class', // Ensures dark mode is enabled and can be toggled
};

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.blue,
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 16.67%': { transform: 'translateY(0%)' },
          '16.67%, 33.33%': { transform: 'translateY(-16.67%)' },
          '33.33%, 50%': { transform: 'translateY(-33.33%)' },
          '50%, 66.67%': { transform: 'translateY(-50%)' },
          '66.67%, 83.33%': { transform: 'translateY(-66.67%)' },
          '83.33%, 100%': { transform: 'translateY(-83.33%)' },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],

  darkMode: 'class',
};

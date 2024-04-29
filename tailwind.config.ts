const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const svgToDataUri = require('mini-svg-data-uri');

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8ecf8',
          100: '#bbc7e9',
          200: '#8ea2da',
          300: '#617dcb',
          400: '#3458bc',
          500: '#1d45b5',
          600: '#1a3ea3',
          700: '#173791',
          800: '#14307f',
          900: '#0f235b',
          950: '#0c1c48',
        },
        secondary: colors.slate,
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
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
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    'addVariablesForColors',
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      );
    },
  ],

  darkMode: 'class',
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}

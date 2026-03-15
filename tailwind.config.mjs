import defaultTheme from 'tailwindcss/defaultTheme.js';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'glow-orange': '0 0 0 1px rgba(249,115,22,0.35), 0 4px 20px rgba(249,115,22,0.12)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-links': theme('colors.orange[600]'),
            '--tw-prose-invert-links': theme('colors.orange[400]'),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

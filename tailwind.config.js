/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  darkMode: 'class',
  content: [
    path.join(__dirname, 'src/**/*.{html,ts}'),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20314f',
        secondary: '#0e1726',
        accent: '#324871',
        light: '#f0f4f8',
      },
    },
  },
  plugins: [],
};

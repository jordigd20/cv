/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily: {
        sans: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
        // sans: ['Roboto Mono Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}


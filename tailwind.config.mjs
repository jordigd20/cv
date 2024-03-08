/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        primary: 'var(--primary)'
      },
      fontFamily: {
        sans: ['Onest Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}


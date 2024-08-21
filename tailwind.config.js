/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fcf7df',
          100: '#f8eaaf',
          200: '#f4dd7a',
          300: '#f0d142',
          400: '#eec602',
          500: '#ecbc00',
          600: '#edae00',
          700: '#ef9b00',
          800: '#f08a00',
          900: '#f16a00',
        },
      },
    },
  },
  plugins: [],
};

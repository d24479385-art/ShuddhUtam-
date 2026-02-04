/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#F9F6F0', 100: '#F3EDE2', 200: '#E8DBC6' },
        gold: { 100: '#F5E6C4', 200: '#EBD494', 400: '#D4AF37', 500: '#C5A028', 600: '#B08D1E' },
        brown: { 900: '#3E2723' }
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],

}

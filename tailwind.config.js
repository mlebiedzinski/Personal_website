/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#E9CDCD',
        'yellow': '#ECD082',
        'tan': '#EEEDD5',
        'slate-green': '#4E2A1A',
        'blue': '#1B25E0',
        'red': '#C1291E',
        'green': '#A0C560',
        'gray': '#E8E8E8',
        'darker-gray': '#D9D9D9',
      },
      fontFamily: {
        'abhaya': ['Abhaya Libre', 'serif'],
      },
    },
  },
  plugins: [],
}


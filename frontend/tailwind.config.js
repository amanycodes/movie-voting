/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        'primary': '#800080',
        'dark': '#252525',
      },
      backgroundColor: {
        'dark-transparent': 'rgba(37, 37, 37, 0.5)',
      },
    },
  },
  plugins: [],
}

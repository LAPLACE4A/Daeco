/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unclick-text': '#666666',
        'clicked-menu' :'#2C98F0',
      },
    },
  },
  plugins: [],
}


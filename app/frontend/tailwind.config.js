/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lordknight: "#f54542",
        paladin: "#f5a442",
      }
    },
  },
  plugins: [],
}


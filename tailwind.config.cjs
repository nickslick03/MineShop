/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'half-black': '0 5px 5px rgba(0, 0, 0, .6)',
        'black': '0 5px 5px rgba(0, 0, 0, .9)'
      },
      fontFamily: {
        Minecraft: ["Minecraft", "sans-serif"]
      }
    },
  },
  plugins: [],
}
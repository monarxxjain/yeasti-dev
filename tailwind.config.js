/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        nr: '900px',
        xxs: '500px',
        xxxs: '370'
      }
    },
  },
  plugins: [],
}
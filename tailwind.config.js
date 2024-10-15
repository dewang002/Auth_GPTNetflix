/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        'sub-10vh':'calc(100%-10vh)'
      },
      
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors:{
      'red': '#7c2121',
      'gray-dark': '#273444',
      'gray': '#858585',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

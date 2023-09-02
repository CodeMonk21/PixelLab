/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./public/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto-2':'repeat(2,auto)',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [],
}


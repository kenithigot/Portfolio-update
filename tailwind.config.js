/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{html,js}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [
     // require('@tailwindcss/forms'),
     require('preline/plugin'),
  ],
}
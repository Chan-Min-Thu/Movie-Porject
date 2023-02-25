/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      background:"#000000",
      redColor:"#dc0303",
      whiteColor:"#fffffe",
      highlight:"#ff8906",
      secondary:"#221f1f",
      transprent:"#504d4dcf"
      
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

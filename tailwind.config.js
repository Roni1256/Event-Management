/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#d2c3f587",
        secondary:"#A888B5",
        fontprimary:"#1B1833",
        fontsecondary:"#640D5F",
        accent:"#FFD2A0"
      },
      fontFamily:{
        fancy:["Fleur De Leah", "cursive"],
        regular:["Lexend Deca", "sans-serif"],
      }
    },
  },
  plugins: [],
})
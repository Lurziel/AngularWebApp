import withMT from "@material-tailwind/html/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4CE14', //yellow
        'secondary': '#495E57', // dark green (header)
        'hover': '#00b183', // light green
        'light': '#F5F7F8', // white (text)
        'dark': '#45474B', // grey (footer)
        'alert': '#c13434', // red
      },
    },
  },
  plugins: [],
})


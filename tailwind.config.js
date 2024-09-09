import withMT from "@material-tailwind/html/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F4CE14',
        'secondary': '#495E57',
        'light': '#F5F7F8',
        'dark': '#45474B',
      },
    },
  },
  plugins: [
  ],
})


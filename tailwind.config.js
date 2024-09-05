import withMT from "@material-tailwind/html/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
})


/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: "#696e79",
      lemon: "#00ffc8",
      blue: "#001a33",
      darkBlue: "#00031a",
    },
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};

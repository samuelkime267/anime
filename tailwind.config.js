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
      lemon: "#01c38d",
      blue: "#132d46",
      darkBlue: "#191e29",
    },
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};

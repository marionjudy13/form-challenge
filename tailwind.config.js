/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Rubik", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        lightBlue: "#F5F5FA",
        blue: "#3547c4",
        gray: "#d5d5db",
        lightGray: "#91919c",
        lighterGray: "#bfbfc7",
        black: "#181818",
      },
    },
  },
  plugins: [],
};

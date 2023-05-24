/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        elgengrau: "#161719",
        azure: "#ecfeff",
        "spanish-gray": "#999999",
      },
    },
  },
  plugins: [],
};

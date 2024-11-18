/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: { 
          DEFAULT: "#333333",
          dark: "#1E1F26",
        },
        selected:{
          red: "#FB3F4A",
          green: "#589C5F",
        },
        divider:{
          DEFAULT: "#F7F7F7",
          dark: "#313131",
        },
        "light-gray": "#666666",
        "secondary-dark": "#CCCCCC",
        },
    },
  },
  plugins: [],
};

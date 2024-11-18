/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary": "#333333",
        "light-gray": "#666666",
        "selected-red": "#FB3F4A",
        "selected-green": "#589C5F",
        "primary-dark": "#1E1F26",
        "secondary-dark": "#CCCCCC",
        "divider": "#F7F7F7",
        "divider-dark": "#313131",
      },
    },
  },
  plugins: [],
};

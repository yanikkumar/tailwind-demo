/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sen: ["Sen", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "selector",
};

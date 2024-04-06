/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nsans-light": ["Nsans Light"],
        "nsans-medium": ["Nsans Medium"],
        "nsans-bold": ["Nsans Bold"],
      },
      colors: {
        "gray-dark-main": "#23242a",
        "gray-dark-second": "#28292d",
        "gray-light": "#d3dce6",
        "red-main": "#ff4b45",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "selector",
};

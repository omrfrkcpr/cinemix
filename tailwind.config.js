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
        base: {
          900: "#13131a",
          800: "#16161f",
          700: "#1c1c27",
          600: "#22222f",
          500: "#3b3b54",
          400: "#7f7f98",
          300: "#ababc4",
          200: "#bfbfd4",
          100: "#fafafa",
          white: "#ffffff",
          input: "#1E1E29",
        },
      },
      fontSize: {
        hg: "96px",
        xl: "48px",
        lg: "32px",
        md: "20px",
        sm: "16px",
        xs: "14px",
        "text-lg": "20px",
        "text-md": "16px",
        "text-sm": "14px",
        "text-xs": "12px",
      },
      fontWeight: {
        extrabold: 800,
        bold: 700,
        semibold: 600,
        regular: 500,
        normal: 400,
        thin: 100,
      },
      borderRadius: {
        8: "8px",
        12: "12px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "selector",
};

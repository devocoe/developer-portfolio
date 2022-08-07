/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "5rem",
        xl: "10rem",
        "2xl": "20rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui"],
      },
      colors: {
        primary: "#00aaa1",
        primaryDark: "#009992",
        secondary: "#1A1A1B",
        light: "#F5F5DC",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#C1121F",
        primaryBlue: "#1D4ED8",
      },
    },
  },
  plugins: [],
};

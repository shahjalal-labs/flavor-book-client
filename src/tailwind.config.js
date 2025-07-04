/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courgette: ["Courgette", "cursive"],
        kaushan: ["'Kaushan Script'", "cursive"],
      },
      colors: {
        skyy: "#38bdf8",
        orangy: "#fb923c",
      },
      screens: {
        "mid-range": {
          min: "1010px",
          max: "1065px",
        },
      },
    },
  },
  plugins: [],
};

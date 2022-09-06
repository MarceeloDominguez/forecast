/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        inputBg: "rgba(255,255,255,0.2)",
      },
      fontFamily: {
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};

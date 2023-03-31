/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#030114",
        secondary: "#F9F5E3",
        tertiary: "#09033A",
        quarter: "#060227",
        "blue-500": "#5887FF",
        "purple-500": "#715AFF"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #715AFF11",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/line-1.png')",
      },
    },
  },
  plugins: [],
};
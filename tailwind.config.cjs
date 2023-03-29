/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1050px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#2A1A1F",
        secondary: "#ACBFA4",
        details: "#816C61",
      },
    },
  },
  plugins: [],
};

// #32213A
// #363946

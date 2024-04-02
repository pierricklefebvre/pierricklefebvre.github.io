/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellowgradient1: "#FBD84A",
        yellowgradient2: "#FFCA1D",
        bluegradient1: "#0C85E1",
        bluegradient2: "#0667BC",
        whitegradient1: "#F6F6F4",
        whitegradient2: "#E9E7E2",
        whitegradient3: "#D8D5CA",
        blackgradient1: "#050B0F",
        blackgradient2: "#152533",
        blackgradient3: "#273F53",
      },
      fontFamily: {
        display: ['"Punkaholic"', "sans-serif"],
      },
    },
  },
  plugins: [],
}


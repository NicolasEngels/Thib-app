/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        lightblue: "#b8d1e9",
        blue: "#4C848C",
        purple: "#5C408D",
        darkpurple: "#311B46",
        pink: "#B9379B",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        audiowide: ["Audiowide", "cursive"],
      },
      backgroundImage: {
        logomed: "url('../img/logomed.png')",
        bggrad: "url('../img/bggrad.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#e9e5dc",
        primary: "#1e293b",
        secondary: "#676a6f",
        navy: "#2A3663",
        mywhite: "#f4f4f5",
        semiMywhite: "#d4d4d4",
        blue: "#86a8d5",
      },
      fontFamily: {
        lato: ["Lato"],
        dancing: ["Dancing Script"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-9deg)" },
          "50%": { transform: "rotate(9deg)" },
        },
        move: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "50%": {
            transform: "translateX(1rem)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateX(2rem)",
            opacity: "0",
          },
        },
      },
      animation: {
        wiggle: "wiggle .5s ease-in-out infinite",
        move: "move 1.3s linear infinite",
      },
    },
  },
  plugins: [],
};

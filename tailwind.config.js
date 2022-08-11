/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // content: ["./src/index.html", "./src/display.html", "./src/flex.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#f3c614",
        secondary: "#353535",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [],
};

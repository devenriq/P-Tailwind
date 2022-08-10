/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // content: ["./src/index.html", "./src/display.html", "./src/flex.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [],
};

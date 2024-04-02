/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.js", "./*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", "@tailwindcss/aspect-ratio")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "feedback-cards": "repeat(auto-fit, minmax(400px, 1fr))",
        "widget-cards": "repeat(auto-fit, minmax(200px, 1fr))",
      },
      screens: {
        small: { raw: "(min-width : 1100px)" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

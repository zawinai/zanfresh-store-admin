/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "feedback-cards": "repeat(auto-fit, minmax(400px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

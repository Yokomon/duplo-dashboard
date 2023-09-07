/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1872px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

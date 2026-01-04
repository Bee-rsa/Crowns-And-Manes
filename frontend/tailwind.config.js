/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rabbit-red": "#ea2e0e",
        "crown-gold": "#B2C1C9", // light gold
        "crown-blue": "#D0DBE0", // light blue
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-blue": "hsl(218, 23%, 16%)",
      "dark-grayish": "hsl(217, 19%, 24%)",
      "grayish-blue": "hsl(217, 19%, 38%)",
      "neon-green": "hsl(150, 100%, 66%)",
      "light-cyan": "hsl(193, 38%, 86%)",
    },
    extend: {
      width: {
        90: "90%",
      },
    },
  },
  plugins: [],
};

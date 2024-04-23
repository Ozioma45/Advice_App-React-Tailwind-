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
    boxShadow: {
      "neon-green": "2px 3px 25px hsl(150, 100%, 66%)", // Adjust the shadow as needed
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    screens: {
      sm: "375px", // Mobile width
      md: "768px",
      lg: "1024px",
      xl: "1440px", // Desktop width
    },
    extend: {
      width: {
        90: "90%",
      },
    },
  },
  plugins: [],
};

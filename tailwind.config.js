/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "580px",
        md: "768px",
        lg: "1024px"
      },
      colors: {
        "primary-dark": "#1d1d1d",
        "primary-crimson": "crimson",
        "secondary-crimson": "#BB1133",
        "primary-blueviolet": "blueviolet",
        "secondary-blueviolet": "#581C91",
        "primary-gray": "gray"
      },
      backdropBlur: {
        "primary-blur": "3px"
      },
      gridTemplateColumns: {
        "primary-grid-cols": "repeat(auto-fit, minmax(240px, 1fr))"
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#061727", 900: "#0b243b", 800: "#123552", 700: "#1b496d" },
        emerald: { 500: "#19b884", 300: "#76e5b8" },
        gold: { 400: "#d5b36a", 300: "#ead69e" },
        ink: { 950: "#11243a", 700: "#506276", 500: "#78889b" },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Manrope", "Arial", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      spacing: { 18: "4.5rem", 22: "5.5rem", 26: "6.5rem" },
      borderRadius: { sm: "4px", md: "8px", lg: "12px" },
      boxShadow: {
        card: "0 14px 35px rgba(12, 35, 56, 0.08)",
        hover: "0 18px 45px rgba(12, 35, 56, 0.14)",
        overlay: "0 30px 80px rgba(0,0,0,.3)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontFamily: {
        "custom-font-family": ["Montserrat", "sans-serif"],
      },
      animation: {
        boxJump: "boxJump 0.5s linear infinite",
        shadowChange: "shadowChange 0.5s linear infinite",
      },
      keyframes: {
        boxJump: {
          "15%": { "border-bottom-right-radius": "3px" },
          "25%": { transform: "translateY(9px) rotate(22.5deg)" },
          "50%": {
            transform: "translateY(18px) scale(1, .9) rotate(45deg)",
            "border-bottom-right-radius": "40px",
          },
          "75%": { transform: "translateY(9px) rotate(67.5deg)" },
          "100%": { transform: "translateY(0) rotate(90deg)" },
        },
        shadowChange: {
          "0% 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.2, 1)" },
        },
      },
    },
  },
  plugins: [],
};

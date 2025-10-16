/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        coral: "#FF7F50",
        orangeRed: "#FF4500",
        tangerine: "#FFA55B",
        flamingo: "#FC6C85",
      },
      animation: {
        pulse: "pulse 6s ease-in-out infinite",
        "pulse-reverse": "pulse-reverse 6s ease-in-out infinite",
        "slide-in": "slide-in 0.8s ease-in-out forwards",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        "pulse-reverse": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

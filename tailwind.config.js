/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        welcomeBG: "url('/logo-nobg.png')",
        card: "url('/paeen.jpg')"
      },
      backgroundColor : {
        card: "#ede2cc",
      },
      colors : {
        question : "#ae2626"
      }
    },
  },
  plugins: [],
}
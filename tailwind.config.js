/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#060b19", // Bleu nuit très sombre (fond du site)
        secondary: "#94a3b8", // Gris bleuté pour le texte secondaire
        tertiary: "#0f172a", // Bleu ardoise très sombre pour le fond des futures cartes
        "black-100": "#020617",
        "black-200": "#000000",
        "white-100": "#f8fafc",
        "accent": "#f59e0b", // 
      },
      boxShadow: {
        card: "0px 35px 120px -15px #020617",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}
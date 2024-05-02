/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: false,
  theme: {
    colors: {
      Blue500:"#3b82f6",
      Red500: "#ef4444",
      Emerald400: "#34d399",
      Gray200: "#e5e7eb",
      Slate50: "#f8fafc",
      White: "#ffffff",
      Slate100: "#f1f5f9",
      Slate200: "#f3f4f6",
      Gray50:"#f9fafb",
      Gray60:"#F8F8F8",
Gray500:"#6b7280",
Zinc50:"#FAFAFA"
    
    },
    extend: {
      fontFamily: {
        "golos-text": ["Golos Text", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

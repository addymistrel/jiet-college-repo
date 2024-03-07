/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
      'bg-1': "url('/public/assets/images/whatMakesJeitSpecial.png')",
      'ml-card':"url('/public/assets/images/jiet6.png')",
    }},
  },
  plugins: [],
};

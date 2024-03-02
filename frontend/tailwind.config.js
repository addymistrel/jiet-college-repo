/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'bg-1': "url('/public/assets/images/whatMakesJeitSpecial.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [],
};

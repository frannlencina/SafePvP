/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "var(--main-black)",
        "main-white": "var(--main-white)",
        "main-rose": "var(--main-rose)",
      },
      backgroundImage: {
        'hero-render': "url('./src/assets/imgs/hero-render.png')"
      }
    },

  },
  plugins: [],
}
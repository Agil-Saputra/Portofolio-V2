/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        card_white : "rgb(244, 244, 245, 1)"
      },
      backgroundImage: {
        'gradient': 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      },
    },
  },
  plugins: [],
}

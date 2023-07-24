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
		lmd : "997px"
	  },
      colors: {
        card_white: "rgb(244, 244, 245, 1)",
      },
      backgroundImage: {
        gradient: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      },
	  boxShadow: {
        '3xl': ' 0 50px 9px 5000px rgb(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

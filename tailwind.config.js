/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "purI": "#150E28",
      "purII": "#903AFF",
      "purIII": "#D434FE"
    },
    fontFamily: {
      "monts": ['Montserrat', 'sans-serif'],
      "unca": ['Unica One', 'cursive'],
      "clash": ['Clash Display', 'sans-serif'],
      "inter": ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "prizeBg": "url('/public/prizesBg.png')"
      }
    },
  },
  plugins: [],
}
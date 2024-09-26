/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre-baskerville': ['"Libre Baskerville"', 'serif'],
        'oswald': ['"Oswald"', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      fontStyle: {
        italic: 'italic',
      },
    },
    
  },
  plugins: [
    daisyui,
  ],
  
}


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
      backgroundImage:{
        'custom-image':"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31112084-2188-4141-b91b-9a4b608cf9d0/dg5vf9c-091cfcc6-a047-498a-a402-1e8dfdab8020.jpg/v1/fill/w_1280,h_720,q_75,strp/itachi_dark_background_moon_wallpaper_by_ayushthestranger_dg5vf9c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMzExMTIwODQtMjE4OC00MTQxLWI5MWItOWE0YjYwOGNmOWQwXC9kZzV2ZjljLTA5MWNmY2M2LWEwNDctNDk4YS1hNDAyLTFlOGRmZGFiODAyMC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9kHmjK14r0dtm-74r87NJ9ptvgTk8Wxu5wf9_BuPU8E')"
      },
    },
    
  },
  plugins: [
    daisyui,
  ],
  
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#370617",
        "secundary":"#6C040E",
        "rojo2":"#9C0207",
        "blue1":"#03071C",
        "plomo1":"#C1C1C4",
        "white1":"#ECF0F9",

      },
      fontFamily:{
        "Poppins":["sans-serif"],
        "Roboto":["sans-serif"],
      }
    },
  },
  plugins: [],
}

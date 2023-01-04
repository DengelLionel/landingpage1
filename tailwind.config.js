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
        "yellow1":"#c9e617",
        "whiteTransparent":"rgba(255,255,255,.9)",

      },
      fontFamily:{
        "Poppins":["sans-serif"],
        "Roboto":["sans-serif"],
      },
      backgroundImage:{
        "fondo1":"url('https://fotos.perfil.com/2021/02/06/trim/950/534/20210207cienciatecnologiashutterstockg-1124481.jpg')",
        "fondo2":"url('https://kardumtech.es/wp-content/uploads/2021/05/workers-it-company-working-computer-1-scaled-2560x1280.jpg')",
        "fondo3":"url('https://www.cybercenter.cl/images/blog/fotos/que-pedir-agencia-marketing-digital.jpg')"
      }
    },
  },
  plugins: [],
}

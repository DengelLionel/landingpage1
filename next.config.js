/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
   domains:["fotos.perfil.com","kardumtech.es","www.cybercenter.cl"]
   
  }
}

module.exports = nextConfig

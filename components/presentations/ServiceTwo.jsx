import React from 'react'
import BoxPresentation from "../sections/BoxPresentation"
import { useContext } from 'react'
import {LandingContext} from "../../context/Landing"
const ServiceTwo = () => {
  const {openProducto2}=useContext(LandingContext)
  console.log("open2",openProducto2)
  return (
    <section className={`absolute transition-all duration-500 w-full  ${openProducto2===true?'left-[0px]':'-left-[100%]'}`}>
      
    <BoxPresentation
     titulo="Somos Proverze la magia de tec"
     resumen="Seamos parte de colaborar con soluciones digitales eficientes para tu negocio."
     imagen="https://fotos.perfil.com/2021/02/06/trim/950/534/20210207cienciatecnologiashutterstockg-1124481.jpg"
     />
  </section>
  )
}

export default ServiceTwo
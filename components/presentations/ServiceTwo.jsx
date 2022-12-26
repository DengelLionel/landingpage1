import React from 'react'
import BoxPresentation from "../sections/BoxPresentation"
import { useContext } from 'react'
import {LandingContext} from "../../context/Landing"
const ServiceTwo = () => {
  const {openProducto2}=useContext(LandingContext)
 
  return (
    <section className={`absolute transition-all duration-500 w-full  ${openProducto2===true?'left-[0px]':'-left-[100%]'}`}>
      
    <BoxPresentation
     titulo="Somos Proverze la magia de tec"
     resumen="Seamos parte de colaborar con soluciones digitales eficientes para tu negocio."
     imagen="https://kardumtech.es/wp-content/uploads/2021/05/workers-it-company-working-computer-1-scaled-2560x1280.jpg"
     />
  </section>
  )
}

export default ServiceTwo
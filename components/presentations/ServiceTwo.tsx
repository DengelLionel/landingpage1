import React from 'react'
import BoxPresentation from "../sections/BoxPresentation"
import { useContext } from 'react'
import {LandingContext} from "../../context/Landing"
const ServiceTwo = () => {
  const {openProducto2}=useContext(LandingContext)
 
  return (
    <section className={` transition-all duration-500 xl:duration-300  ${openProducto2===true?'w-full  xl:w-[576px] h-auto  opacity-100':'w-0 opacity-0 h-0 overflow-hidden'}`}>
      
    <BoxPresentation
     titulo="Somos Proverze la magia de tec"
     resumen="Seamos parte de colaborar con soluciones digitales eficientes para tu negocio."
     imagen="https://kardumtech.es/wp-content/uploads/2021/05/workers-it-company-working-computer-1-scaled-2560x1280.jpg"
     link="/presentacion"
     />
  </section>
  )
}

export default ServiceTwo
import React from 'react'
import BoxPresentation from "../sections/BoxPresentation"
import { useContext } from 'react'
import {LandingContext} from "../../context/Landing"
const ServiceThree = () => {
  const {openProducto3}=useContext(LandingContext)
  return (
    <section className={` transition-all duration-500  xl:duration-300 ${openProducto3===true?'w-full  xl:w-[576px] h-auto opacity-100':'w-0 h-0 opacity-0  overflow-hidden'}`}>
      
    <BoxPresentation
     titulo="Somos agencia digital"
     resumen="Seamos parte de colaborar con soluciones digitales eficientes para tu negocio."
     imagen="https://www.cybercenter.cl/images/blog/fotos/que-pedir-agencia-marketing-digital.jpg"
     />
  </section>
  )
}

export default ServiceThree
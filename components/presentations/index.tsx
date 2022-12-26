import React from 'react'
import ItemsActions from './ItemsActions'
import ServiceOne from "./ServiceOne"
import ServiceTwo from "./ServiceTwo"
import ServiceThree from './ServiceThree'
import BoxSubPresentation from "../sections/BoxSubPresentation"
import Questions from "../sections/Questions"
const Presentation = () => {
  return (
    <section>
     
    <section className='h-auto'>
    <ItemsActions/>
     <ServiceOne/> 
     <ServiceTwo/>
     <ServiceThree/>
     
    </section>
    <section className='absolute top-[700px]'>
    <BoxSubPresentation
     titulo="Creamos Soluciones"
     colorFondo="bg-blue1"
     resumen="Seamos parte de colaborar con soluciones digitales eficientes para tu negocio."
     imagen="https://www.cybercenter.cl/images/blog/fotos/que-pedir-agencia-marketing-digital.jpg"/>

<BoxSubPresentation
     titulo="Creamos Soluciones"
     colorFondo="bg-blue1"
     resumen="Seamos parte de colaborar con soluciones digitales eficientes para tu negocio."
     imagen="https://www.cybercenter.cl/images/blog/fotos/que-pedir-agencia-marketing-digital.jpg"/>
    <Questions/>
     </section>
    </section>
  )
}

export default Presentation
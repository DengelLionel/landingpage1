import React from 'react'
import { useContext,useEffect } from 'react'
import { LandingContext } from '../../context/Landing'
import BoxPresentation from "../sections/BoxPresentation"
const ServiceOne = () => {
  const {openProductoUno} =useContext(LandingContext)
  useEffect(()=>{
    
  },[openProductoUno])

  return (
    <section className={` transition-all duration-500 xl:duration-300 ${openProductoUno===true?'w-full xl:w-[576px] h-auto opacity-100':'w-0 h-0 opacity-0 overflow-hidden'}`}>
      <BoxPresentation
       titulo="Creamos Soluciones Tecnológicas"
       resumen="Seamos parte de colaborar con soluciones digitales eficientes para tu negocio."
       imagen="https://fotos.perfil.com/2021/02/06/trim/950/534/20210207cienciatecnologiashutterstockg-1124481.jpg"
       link="/comprar_ahora"
       />
       
    </section>
  )
}

export default ServiceOne
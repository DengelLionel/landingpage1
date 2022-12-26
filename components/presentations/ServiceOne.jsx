import React from 'react'
import { useContext,useEffect } from 'react'
import { LandingContext } from '../../context/Landing'
import BoxPresentation from "../sections/BoxPresentation"
const ServiceOne = () => {
  const {openProductoUno} =useContext(LandingContext)
  useEffect(()=>{
    
  },[openProductoUno])
  console.log("open p",openProductoUno)
  return (
    <section className={`absolute transition-all duration-500 w-full  ${openProductoUno===true?'left-0':'-left-[100%]'}`}>
      <BoxPresentation
       titulo="Creamos Soluciones Tecnológicas"
       resumen="Seamos parte de colaborar con soluciones digitales eficientes para tu negocio."
       imagen="https://fotos.perfil.com/2021/02/06/trim/950/534/20210207cienciatecnologiashutterstockg-1124481.jpg"
       />
    </section>
  )
}

export default ServiceOne
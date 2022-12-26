import React from 'react'
import { useContext,useEffect } from 'react'
import { LandingContext } from '../../context/Landing'
const ServiceOne = () => {
  const {openProductoUno} =useContext(LandingContext)
  useEffect(()=>{
    
  },[openProductoUno])
  console.log("open p",openProductoUno)
  return (
    <section className={`fixed transition-all duration-500 p-[15px] ${openProductoUno===true?'left-0':'-left-[200%]'}`}>
      <h2 className='font-extrabold font-Poppins text-[29px]'>Creamos Soluciones Tecnológicas</h2>
      <p className='font-Roboto font-medium text-[20px] mt-[21px] mb-[21px]'>Seamos parte de colaborar con soluciones digitales eficientes para tu negocio.</p>
      <button className='rounded-b-full rounded-t-full bg-secundary w-full p-[8px] text-white1 font-extrabold text-[20px] font-Poppins'>Pide Ahora</button>
    </section>
  )
}

export default ServiceOne
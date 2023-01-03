import React from 'react'
import Languages from './sections/Languages'
const Footer = () => {
  return (
   <footer className='bg-black text-white1 p-[15px] w-full h-auto xl:flex xl:justify-center xl:items-center '>
   <article className='flex flex-col xl:w-[880px] '>  
   <p className='text-[16px] font-Roboto font-medium'>¿Preguntas? Llama al 999 888 999</p>
    <Languages/>
    <span className='text-[16px] font-Roboto font-medium'>Lima - Perú</span>
   </article>
  
    
 
   </footer>
  )
}

export default Footer
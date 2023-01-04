import React from 'react'
import ItemsActions from './ItemsActions'
import ServiceOne from "./ServiceOne"
import ServiceTwo from "./ServiceTwo"
import ServiceThree from './ServiceThree'
import BoxSubPresentation from "../sections/BoxSubPresentation"
import Questions from "../sections/Questions"
import { services } from '../../user/data'
import { useContext } from 'react'
import { LandingContext } from '../../context/Landing'
/* import {Card} from "componentes-dengel" */

const Presentation = () => {
  const {openProductoUno,openProducto2,openProducto3}=useContext(LandingContext)
  return (
    <section>
     {/* MOBIL */}
    <section className=' lg:hidden'>
    <ItemsActions/>
     <ServiceOne/> 
     <ServiceTwo/>
     <ServiceThree/>
    </section>
    {/* DESKTOP */}
    
      <section className={`hidden md:hidden lg:flex lg:justify-center lg:items-center lg:h-[800px] xl:h-[700px] transition-all duration-1000  lg:bg-cover lg:bg-no-repeat xl:justify-left xl:items-center xl:pl-[50px] ${openProductoUno===true&&"lg:bg-fondo1 xl:bg-fondo1"} ${openProducto2===true&&' lg:bg-fondo2 xl:bg-fondo2 '} ${openProducto3===true&&'lg:bg-fondo3 xl:bg-fondo3'}`}>
      
      <article className=' lg:rounded-bl-xl lg:rounded-br-xl lg:rounded-tl-xl lg:rounded-tr-xl lg:w-[470px] lg:bg-whiteTransparent lg:h-[620px] xl:rounded-bl-xl xl:rounded-br-xl xl:rounded-tl-xl xl:rounded-tr-xl xl:flex xl:flex-col xl:h-[500px]   xl:bg-whiteTransparent xl:w-[576px]'>
      <ItemsActions/>
     <ServiceOne/> 
     <ServiceTwo/>
     <ServiceThree/>
      </article>
   
    </section>
   
    

    <section className='lg:flex lg:flex-col lg:justify-center lg:items-center'>

      {services?.map((service:any)=>{
        return(
          <BoxSubPresentation
          index={service.id}
          key={service.id}
          titulo={service.title}
          colorFondo="bg-blue1"
          resumen={service.resumen}
          imagen={service.image}/>
        )
      })}
   


    <Questions/>
   
   
     </section>
    </section>
  )
}

export default Presentation
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
    <section className=' md:hidden'>
    <ItemsActions/>
     <ServiceOne/> 
     <ServiceTwo/>
     <ServiceThree/>
    </section>
    {/* DESKTOP */}
    
      <section className={`hidden md:flex xl:h-[700px] transition-all duration-1000  xl:bg-cover xl:bg-no-repeat xl:justify-left xl:items-center xl:pl-[50px] ${openProductoUno===true&&"xl:bg-fondo1"} ${openProducto2===true&&'xl:bg-fondo2'} ${openProducto3===true&&'xl:bg-fondo3'}`}>
      
      <article className=' xl:rounded-bl-xl xl:rounded-br-xl xl:rounded-tl-xl xl:rounded-tr-xl xl:flex xl:flex-col xl:h-[500px]   bg-white1 xl:w-[576px]'>
      <ItemsActions/>
     <ServiceOne/> 
     <ServiceTwo/>
     <ServiceThree/>
      </article>
   
    </section>
   
    

    <section className='xl:flex xl:flex-col xl:justify-center xl:items-center'>

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
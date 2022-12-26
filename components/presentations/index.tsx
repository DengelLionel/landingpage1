import React from 'react'
import ItemsActions from './ItemsActions'
import ServiceOne from "./ServiceOne"
import ServiceTwo from "./ServiceTwo"
import ServiceThree from './ServiceThree'
const Presentation = () => {
  return (
    <section>
    <ItemsActions/>
     <ServiceOne/> 
     <ServiceTwo/>
     <ServiceThree/>
    </section>
  )
}

export default Presentation
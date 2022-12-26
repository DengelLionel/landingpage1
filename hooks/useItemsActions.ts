import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../context/Landing'
export const useItemsActions = () => {
    const {setOpenProductoUno,setOpenProducto2,setOpenProducto3}=useContext(LandingContext);
    const OpenProducto1=()=>{
    setOpenProductoUno(true)
    setOpenProducto2(false)
    setOpenProducto3(false)

    }
    const OpenProducto2=()=>{
      setOpenProducto2(true)
      setOpenProductoUno(false)
      setOpenProducto3(false)
     }
     const OpenProducto3=()=>{
      setOpenProducto3(true)
      setOpenProducto2(false)
      setOpenProductoUno(false)

     }
  return{OpenProducto1,OpenProducto2,OpenProducto3}
}

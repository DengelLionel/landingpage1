import { useState } from 'react'
import { createContext } from 'react'
interface contextMain{
    openMenu:boolean|undefined,
    setOpenMenu:(data:boolean|undefined)=>void,
    openProductoUno:boolean|undefined,
    setOpenProductoUno:(data2:boolean|undefined)=>void,
    openProducto2:boolean|undefined,
    setOpenProducto2:(data3:boolean|undefined)=>void,
    openProducto3:boolean|undefined,
    setOpenProducto3:(data4:boolean|undefined)=>void,
}
export const LandingContext=createContext<contextMain>({
openMenu:false,
setOpenMenu:()=>{},
openProductoUno:true,
setOpenProductoUno:()=>{},
openProducto2:false,
setOpenProducto2:()=>{},
openProducto3:false,
setOpenProducto3:()=>{},
});
interface context{
    children:any
}
export const LandingHandler = ({children}:context) => {
    const [openMenu,setOpenMenu]=useState<boolean|undefined>(false);
    const [openProductoUno,setOpenProductoUno]=useState<boolean|undefined>(true);
    const [openProducto2,setOpenProducto2]=useState<boolean|undefined>(false);
    const [openProducto3,setOpenProducto3]=useState<boolean|undefined>(false);
  const data={
    openMenu,setOpenMenu,openProductoUno,setOpenProductoUno,openProducto2,setOpenProducto2,openProducto3,setOpenProducto3
  }
    return (
    <LandingContext.Provider value={data}>
        {children}
    </LandingContext.Provider>
  )
}


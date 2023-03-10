import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../../context/Landing'
import { useItemsActions } from '../../hooks/useItemsActions'
import IconPc from "../icons/IconPc"
import IconSetting from "../icons/IconSetting"
import IconMobile from "../icons/IconMobile"
const ItemsActions = () => {
    const {openProductoUno,openProducto2,openProducto3}=useContext(LandingContext)
    const {OpenProducto1,OpenProducto2,OpenProducto3}=useItemsActions()
  return (
    <section className='flex flex-col p-[16px] pt-[65px] xl:pt-[16px] '>
    <section className='p-[16px] flex flex-row gap-[18px] transition-all duration-700 justify-center lg:justify-center lg:items-center'>
        <button onClick={()=>OpenProducto1()} className='w-[99px] flex flex-col gap-2 justify-center items-center'>
        <IconPc/>
        <h2 className={`font-semibold font-Poppins text-[14px] ${openProductoUno===true?"text-black":"text-gray1"}`}>Producto Número 1</h2>
        </button>


        <button onClick={()=>OpenProducto2()} className='w-[99px] flex flex-col gap-2 justify-center items-center'>
       <IconSetting/>
    <h2 className={`font-semibold font-Poppins text-[14px] ${openProducto2===true?"text-black":"text-gray1"}`}>Producto Número 2</h2>
        </button>

        <button onClick={()=>OpenProducto3()} className='w-[99px] flex flex-col gap-2 justify-center items-center'>
        <IconMobile/>
<h2 className={`font-semibold font-Poppins text-[14px] ${openProducto3===true?"text-black":"text-gray1"}`}>Producto Número 3</h2>
        </button>
      
    </section>
    <div className={` bg-black transition-all duration-[1000ms] z-[10] w-[99px]  h-[5px]  ${openProductoUno===true&&'relative left-[0px] sm:left-[22%] md:left-[27%] lg:left-[12%]  xl:left-[19%]'} ${openProducto2===true&&'relative left-[120px] sm:left-[42%] md:left-[43%] lg:left-[38%] xl:left-[39%]'} ${openProducto3===true&&'relative left-[220px] sm:left-[60.5%] md:left-[59%] lg:left-[65%] xl:left-[63%]'}
    `}></div>
    </section>
  )
}

export default ItemsActions
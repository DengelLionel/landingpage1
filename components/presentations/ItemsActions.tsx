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
    <section className='flex flex-col p-[16px]'>
    <section className='p-[16px] flex flex-row gap-[18px]'>
        <button onClick={()=>OpenProducto1()} className='w-[99px] flex flex-col gap-2 justify-center items-center'>
        <IconPc/>
        <h2 className='font-semibold font-Poppins text-[14px]'>Producto Número 1</h2>
        </button>


        <button onClick={()=>OpenProducto2()} className='w-[99px] flex flex-col gap-2 justify-center items-center'>
       <IconSetting/>
    <h2 className='font-semibold font-Poppins text-[14px]'>Producto Número 2</h2>
        </button>

        <button onClick={()=>OpenProducto3()} className='w-[99px] flex flex-col gap-2 justify-center items-center'>
        <IconMobile/>
<h2 className='font-semibold font-Poppins text-[14px]'>Producto Número 3</h2>
        </button>
      
    </section>
    <div className={` bg-black transition-all duration-[2000ms] w-[99px]  h-[5px]  ${openProductoUno===true&&'relative left-[0px]'} ${openProducto2===true&&'relative left-[120px]'} ${openProducto3===true&&'relative left-[220px]'}
    `}></div>
    </section>
  )
}

export default ItemsActions
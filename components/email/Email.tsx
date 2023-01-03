import React from 'react'
import Button from '../sections/Button'
const Email = () => {
  return (
    <div className='pl-[15px] pr-[15px] pt-[70px] flex flex-col gap-[10px] justify-center items-center'>
        <span className='font-Roboto font-normal text-[20px]'>¿Cuál es tu correo electrónico?</span>
        <input className='w-[300px] p-[8px] rounded-bl-xl rounded-br-xl rounded-tl-xl rounded-tr-xl border-[1px] border-gray-500 font-Roboto focus:border-sky-400 outline-none' placeholder='Escriba tu correo.' type="email" />
        <Button width='w-[300px]' text="CONTINUAR"/>
        <article className='flex flex-row gap-2 items-center'>
            <div className='w-[140px] h-[0.5px] bg-gray-700'></div>
            <span>O</span>
            <div className='w-[140px] h-[0.5px] bg-gray-700'></div>
        </article>
    </div>
  )
}

export default Email
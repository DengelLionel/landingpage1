import React from 'react'
import Image from 'next/image'
interface boxsub{
  titulo:string,
  resumen:string,
  imagen:string,
  colorFondo:string
}
const BoxSubPresentation = ({titulo,resumen,imagen,colorFondo}:boxsub) => {
    const style={
        "borderRadius":"10px 10px 10px 10px",
    }
  return (
    <section className={`flex flex-col gap-2 items-center mb-[21px] p-[23px] ${colorFondo}`}>
        <h2 className='font-semibold text-[24px] font-Poppins text-center text-white1'>{titulo}</h2>
        <p className='font-medium font-Roboto text-[16px] text-center leading-[18.75px] text-white1'>{resumen}</p>
        <Image style={style} width={269} height={187} alt='subimg' src={imagen}/>
    </section>
  )
}

export default BoxSubPresentation
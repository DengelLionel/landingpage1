import React from 'react'
import Image from 'next/image'
interface boxPresentation{
  titulo:string,
  resumen:string,
  imagen:string
}
const BoxPresentation = ({titulo,resumen,imagen}:boxPresentation) => {
  return (
    <div>
        <article className='p-[15px]'>
      <h2 className='font-extrabold font-Poppins text-[29px]'>{titulo}</h2>
      <p className=' font-Roboto font-medium text-[16px] mt-[21px] mb-[21px]'>{resumen}</p>
      <button className=' rounded-b-full rounded-t-full bg-secundary w-full p-[8px] text-white1 font-extrabold text-[20px] font-Poppins'>Pide Ahora</button>
      </article>
      <Image style={{"marginTop":"21px"}} width={360} height={300} src={imagen} alt="image"/>
    </div>
  )
}

export default BoxPresentation
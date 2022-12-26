import React from 'react'
import Image from 'next/image'
const BoxPresentation = ({titulo,resumen,imagen}) => {
  return (
    <div>
        <article className='p-[15px]'>
      <h2 className='font-extrabold font-Poppins text-[29px]'>{titulo}</h2>
      <p className=' font-Roboto font-medium text-[20px] mt-[21px] mb-[21px]'>{resumen}</p>
      <button className=' rounded-b-full rounded-t-full bg-secundary w-full p-[8px] text-white1 font-extrabold text-[20px] font-Poppins'>Pide Ahora</button>
      </article>
      <Image style={{"marginTop":"21px"}} width={360} height={300} src={imagen} alt="image"/>
    </div>
  )
}

export default BoxPresentation
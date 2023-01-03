import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
interface boxPresentation{
  titulo:string,
  resumen:string,
  imagen:string,
  link?:any,
}
const BoxPresentation = ({titulo,resumen,imagen,link}:boxPresentation) => {
  return (
    <div >
        <article className=' p-[15px] xl:p-[30px]'>
      <h2 className='font-extrabold font-Poppins text-[29px] xl:text-[36px]'>{titulo}</h2>
      <p className=' font-Roboto font-medium text-[18px] xl:text-[26px] mt-[21px] mb-[21px]'>{resumen}</p>
      <Link href={`${link}`} >
        <Button width='w-full' text="Pide Ahora"/>
        </Link>

      </article>
      <article className='md:hidden'> 
      <Image style={{"marginTop":"21px"}} width={360} height={300} src={imagen} alt="image" priority/>
        </article>
        
  
    </div>
  )
}

export default BoxPresentation
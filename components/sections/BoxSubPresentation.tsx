import React from 'react'
import Image from 'next/image'
import { services } from '../../user/data'
interface boxsub{
  titulo:string,
  resumen:string,
  imagen:string,
  colorFondo:string,
  index?:any
}
const Left=({titulo,resumen,imagen,colorFondo}:boxsub)=>{
  const style={
    "borderRadius":"10px 10px 10px 10px",
}
  return(
<section className={`flex flex-col gap-2 items-center mb-[21px]  p-[23px] xl:mt-[21px] xl:w-[880px] lg:flex lg:flex-row lg:gap-[25px]  xl:gap-[82px] xl:pl-[27px] xl:pb-[19px] xl:pr-[27px] xl:rounded-bl-xl  xl:rounded-br-xl xl:rounded-tr-xl xl:rounded-tl-xl ${colorFondo}`}>
      <article className='lg:flex lg:flex-col lg:gap-[15px] xl:gap-[30px] xl:w-[365px] '>
      <h2 className='font-semibold text-[26px] font-Poppins text-center text-white1 lg:text-[31.25px] xl:text-[31.25px]'>{titulo}</h2>
        <p className='font-medium font-Roboto text-[18px] text-center lg:text-[24px]  text-white1 xl:text-[24px]'>{resumen}</p>
      </article>
       
        <article className='hidden md:flex'>
        <Image style={style} width={385} height={212} priority alt='subimg' src={imagen}/>
        </article>
    </section>
  )
}
const Right=({titulo,resumen,imagen,colorFondo}:boxsub)=>{
  const style={
    "borderRadius":"10px 10px 10px 10px",
}
  return(
    <section className={`flex  h-auto flex-col gap-2 items-center mb-[21px] lg:h-auto  p-[23px] xl:mt-[21px] xl:w-[880px] lg:flex lg:flex-row lg:gap-[25px] xl:gap-[82px] xl:pl-[27px] xl:pb-[19px] xl:pr-[27px] xl:rounded-bl-xl  xl:rounded-br-xl xl:rounded-tr-xl xl:rounded-tl-xl ${colorFondo}`}>
        <article className='hidden md:flex'>
        <Image style={style} width={385} height={212} alt='subimg' priority src={imagen}/>
        </article>
      <article className='xl:flex xl:flex-col flex sm:flex-col lg:gap-[15px] xl:gap-[30px] xl:w-[365px] '>
      <h2 className='font-semibold text-[26px] font-Poppins text-center text-white1  lg:text-[31.25px] xl:text-[31.25px]'>{titulo}</h2>
        <p className='font-medium font-Roboto text-[18px] text-center  text-white1 sm:text-[20px] lg:text-[24px] xl:text-[24px]'>{resumen}</p>
      </article>
       
    </section>
  )
}
const BoxSubPresentation = ({titulo,resumen,imagen,colorFondo,index}:boxsub) => {
  const style={
    "borderRadius":"10px 10px 10px 10px",
}
  return (
    /* MOBIL */
    <div>
      <section className={`flex flex-col gap-2 items-center mb-[21px] h-auto  p-[23px] sm:p-[30px] lg:hidden  ${colorFondo}`}>
      <article className='flex flex-col gap-4 sm:gap-[10px] '>
      <h2 className='font-semibold text-[26px] sm:text-[31.25px] font-Poppins text-center text-white1 xl:text-[31.25px]'>{titulo}</h2>
        <p className='font-medium font-Roboto text-[18px] sm:text-[20px] text-center  text-white1 xl:text-[24px]'>{resumen}</p>
      </article>
        <article className='mt-[15px] sm:hidden md:hidden'>
        <Image style={style} width={269} height={187} alt='subimg' priority src={imagen}/>
        </article>
        <article className='hidden sm:flex sm:mt-[15px]  md:hidden'>
        <Image style={style} width={400} height={187} alt='subimg' priority src={imagen}/>
        </article>
        <article className='hidden sm:flex sm:mt-[15px]  lg:hidden'>
        <Image style={style} width={500} height={187} alt='subimg' priority src={imagen}/>
        </article>
       
    </section>
    <section className='hidden lg:flex xl:flex'>
            {index%2!=0?(
              <Left  titulo={titulo}
              resumen={resumen}
              imagen={imagen}
              colorFondo="bg-blue1" />
            ):(
              <Right   titulo={titulo}
              resumen={resumen}
              imagen={imagen}
              colorFondo="bg-blue1" />
            )}
              
            
        
           
          
     
    </section>
    </div>
  )
}

export default BoxSubPresentation
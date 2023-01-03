import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../../context/Landing'
interface contentQuestion{
    answer:string,
    todo:any
}
const ContentQuestion = ({answer,todo}:contentQuestion) => {
    const {idd}=useContext(LandingContext)
  return (
    <article className={`bg-blue1 transition-all duration-300 w-full xl:w-[815px] ${idd.id===todo.id&&idd.state===true?' h-auto opacity-100 p-[15px] xl:p-[20px] mb-[5px]':'opacity-0 h-[0px] overflow-hidden'}`}>
        <p className='text-white1 font-Roboto font-normal text-[16px] xl:text-[1.625rem]'>{answer} </p>
    </article>
  )
}

export default ContentQuestion
import React, { useEffect, useContext } from 'react'
import IconPluss from "../icons/IconPluss"
import { questions } from '../../user/data'
import { LandingContext } from '../../context/Landing'
import { useQuestions } from '../../hooks/useQuestions'
interface itemQuestion{
    pregunta:string,
 
   Handle:any,
    todo:any
}


const ItemQuestion = ({pregunta,todo,Handle}:itemQuestion) => {
const {HandleId}=useQuestions()
const{idEqual,idd}=useContext(LandingContext)

 useEffect(()=>{
  HandleId()
 },[idd])
  return (
    <article className='w-full h-auto text-[16px] font-Roboto font-semibold bg-blue1 pt-2 pb-2 flex flex-row items-center justify-center mb-[5px] lg:w-[750px] xl:w-[815px] '>
        <h3 className='text-white1 tracking-wider w-[250px] text-[18px] sm:text-[20px] sm:w-[400px] lg:text-[24px] lg:w-[600px] xl:w-[600px] xl:text-[26px] '>{pregunta} </h3>
        
        <button aria-labelledby="openQuestion" aria-label='question' type='button' onClick={Handle} >
     
          <IconPluss  className={`feather feather-plus text-white1 relative left-5 transition-all duration-500 lg:w-[30px]  ${idd.id===todo.id&&idd.state===true&&'rotate-45'}`} />
          
         
          
        
        </button>
    </article>
  )
}

export default ItemQuestion
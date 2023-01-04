import React, { useEffect, useState,useContext } from 'react'
import ItemQuestion from "./ItemQuestion"
import {questions} from "../../user/data"
import { LandingContext } from '../../context/Landing'
import { useQuestions } from '../../hooks/useQuestions'
import ContentQuestion from './ContentQuestion'
const Questions = () => {

 const {setIdd,idd}=useContext(LandingContext)


  const {HandleId}=useQuestions()
useEffect(()=>{
  HandleId()
})
  
  return (
    <section>
        <h2 className='font-Poppins font-semibold text-[24px] text-center tracking-normal mb-[15px] sm:text-[31.25px] xl:text-[36px]'>Preguntas Frecuentes</h2>
        {questions?.map((question:any)=>
        {
          return(
            <article key={question.id}>
            <ItemQuestion
            todo={question}
             
             Handle={()=>{ setIdd({id:question.id,state:!question.state})}}
              key={question.id}
               pregunta={question.question}/>
              <ContentQuestion todo={question} answer={question.answer}/>
               </article>
        )})}
      
     
    </section>
  )
}

export default Questions
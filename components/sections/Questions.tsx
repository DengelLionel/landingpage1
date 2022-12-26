import React, { useEffect, useState } from 'react'
import ItemQuestion from "./ItemQuestion"
import {questions} from "../../user/data"
const Questions = () => {
  const [data,setData]=useState<any>(questions)
  const Update=()=>{
    setData(questions)
   } 
  useEffect(()=>{
   
   Update()
  })
  return (
    <section>
        <h2 className='font-Poppins font-semibold text-[24px] text-center tracking-normal mb-[15px]'>Preguntas Frecuentes</h2>
        {data?.map((question:any)=>
        {
          return(
            <ItemQuestion
             identificador={question.id}
             state={question.state}
              key={question.id}
               pregunta={question.question}/>
        )})}
      
     
    </section>
  )
}

export default Questions
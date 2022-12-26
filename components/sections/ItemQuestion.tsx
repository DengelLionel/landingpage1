import React, { useEffect, useState } from 'react'
import IconPluss from "../icons/IconPluss"
import { questions } from '../../user/data'
interface itemQuestion{
    pregunta:string,
    identificador:number,
    state:boolean
}


const ItemQuestion = ({pregunta,identificador,state}:itemQuestion) => {
  useEffect(()=>{

  })
  console.log("items ",questions)
  console.log("stados",state)
  const [id,setId]=useState<number>(0);
  const HandleId=(id:number)=>{
    questions?.filter((question)=>{
      if( question.id==id){
        question.state=true
      }
     
    })
    setId(id)
  }
  return (
    <article className='w-full h-auto text-[16px] font-Roboto font-normal bg-blue1 pt-2 pb-2 flex flex-row items-center justify-center mb-[15px] '>
        <h3 className='text-white1 tracking-wider w-[250px] '>{pregunta} </h3>
        <button onClick={()=>HandleId(identificador)} >
        <IconPluss className={`feather feather-plus text-white1 relative left-5 transition-all duration-500 ${state===true?'rotate-45':'rotate-0'}`} />
        </button>
    </article>
  )
}

export default ItemQuestion
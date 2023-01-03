import React from 'react'
interface button{
    text:string,
    width?:string
}
const Button = ({text,width}:button) => {
  return (
    <button className={`rounded-b-full rounded-t-full bg-secundary ${width} p-[8px] text-white1 font-extrabold text-[20px] xl:text-[26px]  font-Poppins`}>{text}</button>
  )
}

export default Button
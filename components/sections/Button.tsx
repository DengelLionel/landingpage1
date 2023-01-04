import React from 'react'
interface button{
    text:string,
    width?:string
}
const Button = ({text,width}:button) => {
  return (
    <button aria-labelledby="button" aria-label='button' type='button' className={`rounded-b-full rounded-t-full bg-yellow1 ${width} p-[8px] text-black font-bold text-[20px] xl:text-[26px]  font-Poppins`}>{text}</button>
  )
}

export default Button
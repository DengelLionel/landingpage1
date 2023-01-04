import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../../context/Landing'
const IconMobile = (props) => {
  const {openProducto3}=useContext(LandingContext)
  return (
    <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.3 0H2.7C1.21 0 0 .756 0 1.688v14.624C0 17.244 1.21 18 2.7 18h12.6c1.49 0 2.7-.756 2.7-1.688V1.688C18 .756 16.79 0 15.3 0ZM9 16.875c-.996 0-1.8-.503-1.8-1.125s.804-1.125 1.8-1.125 1.8.503 1.8 1.125-.804 1.125-1.8 1.125Zm6.3-3.797c0 .232-.304.422-.675.422H3.375c-.371 0-.675-.19-.675-.422V2.11c0-.232.304-.421.675-.421h11.25c.371 0 .675.19.675.421v10.97Z"
      fill={`${openProducto3===true?"#000":"#8E8E8E"}`}
    />
  </svg>
  )
}

export default IconMobile
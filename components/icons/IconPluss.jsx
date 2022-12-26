import React from 'react'
import { questions } from '../../user/data'
const IconPluss = (props,{className}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
  )
}

export default IconPluss
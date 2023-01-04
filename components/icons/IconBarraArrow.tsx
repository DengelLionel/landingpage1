import React from 'react'

const IconBarraArrow = (props:any) => {
  return (
    <svg width={24} height={24} className={props.className} fill="none" {...props}>
    <path d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8z" fill="currentColor" />
  </svg>
  )
}

export default IconBarraArrow
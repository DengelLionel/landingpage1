import React from 'react'
interface icon{
    props?:any
}
const IconTriangle = (props:icon) => {
  return (
    <svg
    width={16}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.252 9.158a1 1 0 0 0 1.496 0l6.434-7.244c.573-.645.115-1.664-.748-1.664H1.566C.703.25.245 1.27.818 1.914l6.434 7.244Z"
      fill="#ECF0F9"
    />
  </svg>
  )
}

export default IconTriangle
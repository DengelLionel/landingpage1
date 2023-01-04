import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../../context/Landing'
const IconPc = (props) => {
  const {openProductoUno}=useContext(LandingContext)
  return (
    <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
 
    {...props}
  >
    <path
      d="M7.173 9.199c.175.22.46.22.636 0l.318-.398a.666.666 0 0 0 0-.796L7.123 6.75l1.004-1.256a.666.666 0 0 0 0-.795L7.809 4.3c-.176-.22-.46-.22-.637 0l-1.64 2.051a.666.666 0 0 0 0 .796l1.64 2.05Zm2.7-.398.318.398c.176.22.46.22.637 0l1.64-2.051a.666.666 0 0 0 0-.796l-1.64-2.05c-.176-.22-.461-.22-.637 0l-.318.397a.666.666 0 0 0 0 .796l1.004 1.255-1.004 1.256a.666.666 0 0 0 0 .795Zm7.677 5.824h-6.82c-.02.696-.413 1.125-.92 1.125H8.1c-.526 0-.929-.614-.922-1.125H.45c-.247 0-.45.253-.45.563v.562C0 16.988.81 18 1.8 18h14.4c.99 0 1.8-1.012 1.8-2.25v-.563c0-.309-.203-.562-.45-.562ZM16.2 1.687C16.2.76 15.593 0 14.85 0H3.15C2.408 0 1.8.76 1.8 1.688V13.5h14.4V1.687Zm-1.8 9.563H3.6v-9h10.8v9Z"
      fill={`${openProductoUno===true?"#000":"#8E8E8E"}`}
    />
  </svg>
  )
}

export default IconPc
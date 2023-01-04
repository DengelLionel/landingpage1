import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../../context/Landing'
const IconSetting = (props) => {
  const {openProducto2}=useContext(LandingContext)
  return (
    <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.85 3.835a.422.422 0 0 0-.707-.193l-2.615 2.614-2.386-.398-.398-2.386L14.36.858a.423.423 0 0 0-.2-.709 5.06 5.06 0 0 0-4.801 1.333C7.964 2.876 7.581 4.896 8.16 6.657L.659 14.16a2.25 2.25 0 0 0 3.182 3.182l7.495-7.496c1.762.588 3.778.2 5.181-1.203a5.06 5.06 0 0 0 1.333-4.807ZM2.25 16.594a.844.844 0 1 1 0-1.688.844.844 0 0 1 0 1.688Z"
      fill={`${openProducto2===true?"#000":"#8E8E8E"}`}
    />
  </svg>
  )
}

export default IconSetting
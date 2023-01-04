import React from 'react'
import Link from 'next/link'
import IconBarraArrow from './icons/IconBarraArrow'
import { useContext } from 'react'
import { LandingContext } from '../context/Landing'
interface navlink{
    title:string,
    subcategory:boolean,
}
const NavLink = ({title,subcategory}:navlink) => {
    const {openSubCategory,setOpenSubCategory}=useContext(LandingContext)
  return (
   
       
    <Link className='text-white1 font-semibold p-[8px] font-Roboto text-[20px] ' href="#">
    <button className='flex flex-row gap-[180px] items-center' onClick={()=>subcategory&&setOpenSubCategory(!openSubCategory)}>
        <span>{title}</span>
        
    {subcategory===true&&(
        
        <IconBarraArrow  className={`transition-all duraction-500 text-white ${openSubCategory===true&&'rotate-180'}`}/>
   
)}
</button>
    </Link>
   
    
     
    
    

  )
}

export default NavLink
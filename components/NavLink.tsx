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
    <section className='flex flex-row gap-[180px] items-center'>
    <Link className='text-white1 font-semibold p-[8px] font-Roboto text-[20px]' href="#">{title}</Link>
    {subcategory===true&&(
        <button onClick={()=>setOpenSubCategory(!openSubCategory)}>
            <IconBarraArrow  className={`transition-all duraction-500 text-white ${openSubCategory===true&&'rotate-180'}`}/>
        </button>
    )}
    </section>
    

  )
}

export default NavLink
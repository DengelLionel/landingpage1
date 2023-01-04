import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../context/Landing'
import Link from 'next/link'
import NavLink from './NavLink'
import SubNavLink from './SubNavLink'
import IconCategory from './icons/IconCategory'
const Nav = () => {
    const {openMenu,openSubCategory}=useContext(LandingContext)
    return (
    <>
    {/* MOBIL */}
    <nav className={`bg-black p-[15px] w-full h-auto z-[40] transition-all duration-1000 flex flex-col justify-start items-start fixed ${openMenu===true?' top-[60px]':'top-[-100%]'}  md:hidden ` }>
    <NavLink subcategory={true} title='Compañía'/>
    
        <section className={`flex flex-col transition-all duration-700  ${openSubCategory===true?'pl-[20px] opacity-100 h-auto ':'opacity-0 overflow-hidden h-0'}`}>
        <SubNavLink title='Quienes somos'/>
        <SubNavLink title='Contactanos'/>
        <SubNavLink title='Lo que ofrecemos'/>
        <SubNavLink title='Blog'/>
        </section>
        <NavLink subcategory={false}  title='Seguridad'/>
        <NavLink subcategory={false}  title='Ayuda'/>
        <NavLink subcategory={false}  title='Comunidad'/>
    </nav>

{/* desktop */}
    <nav className='hidden md:flex h-[auto] '>
        <ul className='text-white1 font-semibold font-Poppins text-[24px] flex justify-start items-start'>
            <li >
                <Link className='flex justify-center items-center gap-[10px]' href="#">
            <IconCategory/>
            <span> Productos</span>

 </Link></li>
        </ul>
    </nav>
    </>
  )
}


export default Nav
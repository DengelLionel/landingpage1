import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../context/Landing'
import Link from 'next/link'
import NavLink from './NavLink'
import SubNavLink from './SubNavLink'

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
        <ul className='text-white1 font-semibold font-Poppins text-[24px]'>
            <li >
                <Link className='flex justify-center items-center gap-[10px]' href="">
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83334 10H8.16668C10.5 10 11.6667 9 11.6667 7V5C11.6667 3 10.5 2 8.16668 2H5.83334C3.50001 2 2.33334 3 2.33334 5V7C2.33334 9 3.50001 10 5.83334 10ZM19.8333 10H22.1667C24.5 10 25.6667 9 25.6667 7V5C25.6667 3 24.5 2 22.1667 2H19.8333C17.5 2 16.3333 3 16.3333 5V7C16.3333 9 17.5 10 19.8333 10ZM19.8333 22H22.1667C24.5 22 25.6667 21 25.6667 19V17C25.6667 15 24.5 14 22.1667 14H19.8333C17.5 14 16.3333 15 16.3333 17V19C16.3333 21 17.5 22 19.8333 22ZM5.83334 22H8.16668C10.5 22 11.6667 21 11.6667 19V17C11.6667 15 10.5 14 8.16668 14H5.83334C3.50001 14 2.33334 15 2.33334 17V19C2.33334 21 3.50001 22 5.83334 22Z" stroke="#ECF0F9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 Productos
 </Link></li>
        </ul>
    </nav>
    </>
  )
}


export default Nav
import React from 'react'
import { useContext } from 'react'
import { LandingContext } from '../context/landing'
import Link from 'next/link'
const Nav = () => {
    const {openMenu}=useContext(LandingContext)
    return (
    <>
    <nav className={`bg-primary w-full h-[300px] transition-all duration-1000 fixed ${openMenu===true?' top-[60px]':'top-[-100%]'}  md:hidden ` }>
    </nav>
    <nav className='hidden md:flex h-[auto] '>
        <ul className='text-white1 font-semibold font-Poppins text-[24px]'>
            <li >
                <Link className='flex justify-center items-center gap-[10px]' href="">
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83334 10H8.16668C10.5 10 11.6667 9 11.6667 7V5C11.6667 3 10.5 2 8.16668 2H5.83334C3.50001 2 2.33334 3 2.33334 5V7C2.33334 9 3.50001 10 5.83334 10ZM19.8333 10H22.1667C24.5 10 25.6667 9 25.6667 7V5C25.6667 3 24.5 2 22.1667 2H19.8333C17.5 2 16.3333 3 16.3333 5V7C16.3333 9 17.5 10 19.8333 10ZM19.8333 22H22.1667C24.5 22 25.6667 21 25.6667 19V17C25.6667 15 24.5 14 22.1667 14H19.8333C17.5 14 16.3333 15 16.3333 17V19C16.3333 21 17.5 22 19.8333 22ZM5.83334 22H8.16668C10.5 22 11.6667 21 11.6667 19V17C11.6667 15 10.5 14 8.16668 14H5.83334C3.50001 14 2.33334 15 2.33334 17V19C2.33334 21 3.50001 22 5.83334 22Z" stroke="#ECF0F9" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Productos
 </Link></li>
        </ul>
    </nav>
    </>
  )
}


export default Nav
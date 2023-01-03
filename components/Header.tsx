import React from 'react'
import Image from 'next/image'
import ButtonMenu from './sections/ButtonMenu'
import Nav from './Nav'
import { useContext } from 'react'
import { LandingContext } from '../context/Landing'
const Header = () => {
    const {setOpenMenu,openMenu}=useContext(LandingContext)
  return (
    <header className='bg-primary p-[16px] z-[40] w-full h-[64px] fixed top-0 flex flex-grow gap-[260px] justify-center items-center xl:gap-[345px] xl:pl-[201px] xl:pr-[201px]'>
        <Image width={35} height={35} src="/img/proverze.svg"alt="" priority/>
       <ButtonMenu open={()=>setOpenMenu(!openMenu)} />
       <Nav/>
    </header>
  )
}

export default Header
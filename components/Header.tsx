import React from 'react'
import Image from 'next/image'
import ButtonMenu from './sections/ButtonMenu'
import Nav from './Nav'
import { useContext } from 'react'
import { LandingContext } from '../context/landing'
const Header = () => {
    const {setOpenMenu,openMenu}=useContext(LandingContext)
  return (
    <header className='bg-primary p-[16px] w-full h-[64px] flex flex-grow gap-[260px] justify-center items-center xl:gap-[345px] xl:pl-[201px] xl:pr-[201px]'>
        <Image width={35} height={35} src="/img/logo.jpeg"alt="" priority/>
       <ButtonMenu open={()=>setOpenMenu(!openMenu)} />
       <Nav/>
    </header>
  )
}

export default Header
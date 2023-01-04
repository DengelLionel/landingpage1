import React from 'react'
import Link from 'next/link'
interface subNavCategory{
title:string
}
const SubNavLink = ({title}:subNavCategory) => {
  return (
   <Link className='text-white1 p-[8px] ' href="#">{title}</Link>
  )
}

export default SubNavLink
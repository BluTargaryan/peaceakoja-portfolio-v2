import React from 'react'
import { MdMenu } from "react-icons/md";

import { lustria } from "@/app/layout"

const Nav = () => {
  return (
    <nav className='flex bg-selfSecondary w-screen h-12 text-xl px-4 items-center justify-between text-selfPrimary'>
   <h1 className={`${lustria.className} text-xl`}>Peace</h1>
   <MdMenu className='text-xl'/>
    </nav>
  )
}

export default Nav
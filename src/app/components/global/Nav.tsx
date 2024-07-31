import React from 'react'
import { MdMenu } from "react-icons/md";

import NavDropdownMenu from './NavDropdownMenu';

import { lustria } from "@/app/layout"

import menuList  from '@/app/data-int/menuList'; 

const Nav = () => {
  

  return (
    <nav className='flex bg-selfSecondary w-screen h-12 text-xl px-4 items-center justify-between text-selfPrimary relative lg:h-20'>
   <h1 className={`${lustria.className} text-xl lg:text-3xl`}>Peace</h1>
   <ul className='hidden text-xl gap-6 text-selfPrimary cursor-pointer lg:flex'>
   {menuList().map((item) => (
             
              <li key={item.listName} className='lg: font-normal'>{item.listName}</li>
            ))}
   </ul>
   <div className='lg:hidden'>
   <NavDropdownMenu />
   </div>
   
    </nav>
  )
}

export default Nav
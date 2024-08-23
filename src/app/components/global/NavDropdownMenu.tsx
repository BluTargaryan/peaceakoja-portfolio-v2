'use client'

import React from 'react'

import Link from 'next/link';
import { MdMenu } from "react-icons/md";
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';

import menuList from '../../data-int/menuList' 

const NavDropdownMenu = () => {

    const createHandleMenuClick = (menuItem:any) => {
        return () => {
          console.log(`Clicked on ${menuItem}`);
        };
      };


  return (
    <Dropdown>
  <MenuButton>
    <MdMenu className='text-xl'/>
    </MenuButton>

  <Menu slots={{ listbox: 'ul' }} 
  className='bg-selfSecondary text-selfPrimary cursor-pointer absolute z-30 w-full top-0 left-0 '>
  {menuList().map((item, index) => (
              <Link key={item.listName} href={item.link}>
              <MenuItem
              className={`p-3 text-right ${index < menuList().length -1 && `border-b-2 border-selfPrimary`}
                md:p-5 `}
              onClick={createHandleMenuClick(`${item.listName}`)}>{item.listName}</MenuItem>
              </Link>
              
            ))}
    
  </Menu>
</Dropdown>
  )
}

export default NavDropdownMenu
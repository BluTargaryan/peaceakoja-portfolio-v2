'use client'

import React from 'react'
import {linkData} from '@/app/data-int/links'
import { Button } from '@mui/base/Button';
import { MdArrowRightAlt } from "react-icons/md";
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const LinksList = () => {
    const router = useRouter()
  return (
    <div className='flex gap-8 xl:gap-24 '>
     {linkData.map((item,index)=>(
         <div key={index} className='w-16 h-16 relative cursor-pointer group xl:w-52 xl:h-52' 
         onClick={() => {
            const link = item.link;
            const linkType = item.linkType;
          
            if (linkType === 'route') {
              window.open(link, '_blank', 'noopener,noreferrer');
            } else if (/^\+?[1-9]\d{1,14}$/.test(link)) { // Validate if link is a phone number
              window.location.href = `tel:${link}`;
            } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(link)) { // Validate if link is an email
              window.location.href = `mailto:${link}`;
            } else {
              console.error('Invalid linkType or link format');
            }
          }}>
         <Image 
             src={item.img}
             width="0"
             height="0"
             sizes="100vw"
             className="h-full w-auto"
             alt="Image representing studious fellow" 
           />

<Button className='hidden absolute bottom-0 left-0 h-14 w-full  items-center justify-between p-3 border-2 border-selfSecondary bg-selfPrimary text-selfSecondary rounded-xl
transition-all duration-300 hover:pr-2 
xl:group-hover:flex'>
  {item.title}
  <MdArrowRightAlt className='text-2xl xl:text-3xl'/> 
  </Button>
         </div>
     ))}
        </div>
  )
}

export default LinksList
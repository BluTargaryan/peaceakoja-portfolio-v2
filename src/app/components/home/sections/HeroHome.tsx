import Image from 'next/image'
import React from 'react'
import PortCharHeader from '../../../../../public/port char at work.png'
import { Button } from '@mui/base/Button';
import { MdArrowRightAlt } from "react-icons/md";

import { lustria } from "@/app/layout"

const HeroHome = () => {
  return (
    <header className='w-full flex flex-col py-16 gap-16 items-center bg-transparent 
    lg:flex-row-reverse lg:justify-between lg:px-8 
    xl:py-40 xl:gap-28'> 
    <div className='w-11/12 bg-selfBlue rounded-xl h-72 flex items-center justify-center border-2 border-selfSecondary
    lg:w-2/5 
    xl:w-1/2 xl:h-[480px]'>
    <Image 
    src={PortCharHeader}
    width="0"
    height="0"
    sizes="100vw"
    className="h-4/5 w-auto"
    alt="boy working on his computer setup"
   />
    </div>

<div className='flex flex-col gap-10 items-center w-11/12 
lg:w-1/2
xl:w-2/5'>
<h1 className={`${lustria.className} text-4xl text-center w-full lg:text-left xl:text-6xl xl:leading-tight`}>Welcome to the portfolio of Peace Akoja</h1>
<div className='flex flex-col gap-5 w-5/6 
lg:w-full lg:flex-row lg:justify-between
xl:text-xl'>
<Button className='h-14 w-full flex items-center justify-center bg-selfSecondary text-selfPrimary rounded-xl lg:w-[48%]'>Continue</Button>
<Button className='h-14 w-full flex items-center justify-between p-3 border-2 border-selfSecondary bg-transparent text-selfSecondary rounded-xl
transition-all hover:pr-2 lg:w-[48%]'>
  Go to Projects
  <MdArrowRightAlt className='text-2xl xl:text-3xl'/> 
  </Button>
</div>
</div>
    </header>
  )
}

export default HeroHome
'use client'

import React, {useRef} from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@mui/base/Button';
import { MdArrowRightAlt } from "react-icons/md";

const HeroButtonList = () => {
const router = useRouter()


const handleScroll = () => {
  const elem = document.getElementById('projects-homeSection');
  window.scrollTo({
    top: elem?.getBoundingClientRect().top,
    behavior: "smooth",
  });
};

  return (
    <div className='flex flex-col gap-5 w-5/6 
    lg:w-full lg:flex-row lg:justify-between
    xl:text-xl'>
    <Button className='h-14 w-full flex items-center justify-center bg-selfSecondary text-selfPrimary rounded-xl lg:w-[48%]
    transition-all hover:bg-transparent hover:border-2 hover:border-selfSecondary hover:text-selfSecondary
    '
    onClick={()=>handleScroll()}
    >Continue</Button>
    <Button className='h-14 w-full flex items-center justify-between p-3 border-2 border-selfSecondary bg-transparent text-selfSecondary rounded-xl
    transition-all hover:pr-2 lg:w-[48%]'
    onClick={()=>router.push('/projects')}>
      Go to Projects
      <MdArrowRightAlt className='text-2xl xl:text-3xl'/> 
      </Button>
    </div>
  )
}

export default HeroButtonList
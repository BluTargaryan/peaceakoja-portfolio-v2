'use client'

import React from 'react'
import { Button } from '@mui/base/Button';
import { useRouter } from 'next/navigation';
import { MdArrowRightAlt } from "react-icons/md";

const ProjectsButton = () => {
    const router = useRouter()
  return (
    <Button className='h-14 w-11/12 flex items-center justify-between p-3  bg-selfSecondary text-selfPrimary rounded-xl
    transition-all hover:pr-2 md:w-3/4 lg:w-[48%] xl:w-1/3 xl:text-xl '
    onClick={()=>router.push('/projects')}
    >
         Go to Projects
  <MdArrowRightAlt className='text-2xl xl:text-3xl'/> 
  </Button>  
  )
}

export default ProjectsButton
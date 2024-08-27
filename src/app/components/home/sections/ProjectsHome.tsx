

import React, {useRef} from 'react'

import { useRouter } from 'next/navigation';
import { Button } from '@mui/base/Button';
import { MdArrowRightAlt } from "react-icons/md";

import { lustria } from "@/app/utils"
import ProjectsList from '../subComps/ProjectsList'

const ProjectsHome = () => {
const router = useRouter()

  return (
    <section id='projects-homeSection' className='py-16 flex flex-col items-center justify-center gap-10 xl:py-24'>
<div className="flex flex-col items-center gap-4">
  <h2 className={`${lustria.className} text-2xl xl:text-5xl`}>Projects</h2>
  <p className="text-base xl:text-2xl">Click an item to expand it</p>
</div>

<ProjectsList />

<Button className='h-14 w-11/12 flex items-center justify-between p-3  bg-selfSecondary text-selfPrimary rounded-xl
transition-all hover:pr-2 md:w-3/4 lg:w-[48%] xl:w-1/3 xl:text-xl '
onClick={()=>router.push('/projects')}
>
  Go to Projects
  <MdArrowRightAlt className='text-2xl xl:text-3xl'/> 
  </Button>      
  </section>
  )
}

export default ProjectsHome
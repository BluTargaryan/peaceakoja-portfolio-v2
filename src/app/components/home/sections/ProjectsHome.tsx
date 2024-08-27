

import React, {useRef} from 'react'


import { lustria } from "@/app/utils"
import ProjectsList from '../subComps/ProjectsList'
import ProjectsButton from '../subComps/ProjectsButton'

const ProjectsHome = () => {


  return (
    <section id='projects-homeSection' className='py-16 flex flex-col items-center justify-center gap-10 xl:py-24'>
<div className="flex flex-col items-center gap-4">
  <h2 className={`${lustria.className} text-2xl xl:text-5xl`}>Projects</h2>
  <p className="text-base xl:text-2xl">Click an item to expand it</p>
</div>

<ProjectsList />

<ProjectsButton />
     
  </section>
  )
}

export default ProjectsHome
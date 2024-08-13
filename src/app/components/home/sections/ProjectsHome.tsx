import React from 'react'

import { lustria } from "@/app/layout"
import ProjectsList from '../subComps/ProjectsList'

const ProjectsHome = () => {
  return (
    <section className='py-16 flex flex-col items-center justify-center gap-10'>
<div className="flex flex-col items-center gap-4">
  <h2 className={`${lustria.className} text-2xl`}>Projects</h2>
  <p className="text-base">Click an item to expand it</p>
</div>

<ProjectsList />
      </section>
  )
}

export default ProjectsHome
import React from 'react'

import projectsList from '@/app/data-int/projectsList'

const ProjectsList = () => {
  return (
    <div className='w-full py-10 px-14 grid grid-cols-1 gap-3  lg:grid-cols-2 xl:gap-24 xl:py-48 xl:px-20'>
{projectsList().map((project) => (
          <div 
            key={project.site} 
            className={`w-full bg-cover bg-selfSecondary rounded-xl cursor-pointer overflow-hidden group h-[200px] xl:h-[400px]`}
            style={{ backgroundImage: `url(${project.img})` }}
          >
          <div className='w-full h-full bg-black bg-opacity-60 flex-col gap-2 text-selfPrimary p-4 justify-end flex xl:gap-5 xl:p-8' >
          <h3 className='text-2xl font-normal xl:text-5xl'>{project.name}</h3>
          <span className='flex gap-4 xl:text-2xl xl:gap-6'>
          <a href={project.github} target="_blank" className='hover:border-b-2 '>Github</a>
          <a href={project.site} target="_blank" className='hover:border-b-2 '>Website</a>
          </span>
          </div>
          </div>
        ))}
    </div>
  )
}

export default ProjectsList
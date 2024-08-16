'use client'

import React, {useState, useRef , useEffect} from 'react'

import projectsList from '@/app/data-int/projectsList'

const ProjectsList = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const outsideClickRef = useRef<HTMLDivElement>(null);
  
    const handleOutsideClick = (event: MouseEvent) => {
      if (outsideClickRef.current && !outsideClickRef.current.contains(event.target as HTMLElement)) {
        setSelectedProject(null); // Deselect when clicking outside
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);
  
    const handleClick = (project: string) => {
      setSelectedProject(selectedProject === project ? null : project); // Toggle selected project
    };
  
    return (
      <div ref={outsideClickRef} className='h-64 w-11/12 flex flex-col gap-3 md:w-3/4 lg:flex-row xl:w-8/12 xl:h-96'>
        {projectsList().map((project) => (
          <div 
            key={project.site} 
            onClick={() => handleClick(project.site)}
            className={`w-full bg-cover  bg-selfSecondary rounded-xl cursor-pointer overflow-hidden group ${
              selectedProject === project.site ? 'h-[200px] lg:h-full lg:w-[654px]' : 'h-auto lg:h-full lg:w-auto'
            } flex-grow`}
            style={{ backgroundImage: `url(${project.img})` }}
          >
          <div className={`w-full h-full bg-black bg-opacity-60 flex-col gap-2 text-selfPrimary p-4 justify-end
          ${selectedProject === project.site ? 'flex' : 'hidden'} `}
          >
          <h3 className='text-2xl font-normal xl:text-5xl'>{project.name}</h3>
          <span className='flex gap-4 xl:text-2xl xl:gap-6'>
          <a href={project.github} className='hover:border-b-2 '>Github</a>
          <a href={project.site} className='hover:border-b-2 '>Website</a>
          </span>
          </div>
          </div>
        ))}
      </div>
    );
  }

export default ProjectsList
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
      <div ref={outsideClickRef} className='h-64 w-11/12 flex flex-col gap-3'>
        {projectsList().map((project) => (
          <div 
            key={project.site} 
            onClick={() => handleClick(project.site)}
            className={`w-full bg-selfSecondary cursor-pointer transition-all duration-300 ${
              selectedProject === project.site ? 'h-[200px]' : 'h-auto'
            } flex-grow`}
          ></div>
        ))}
      </div>
    );
  }

export default ProjectsList
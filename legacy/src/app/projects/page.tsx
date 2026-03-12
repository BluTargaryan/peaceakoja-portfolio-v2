import React from 'react'
import Footer from '../components/global/Footer'
import HeroProjects from '../components/projects/sections/HeroProjects'
import ProjectsList from '../components/projects/sections/ProjectsList'

const Projects = () => {
  return (
    <main className="w-full bg-selfPrimary overflow-x-hidden scroll-smooth">
      <HeroProjects />
      <ProjectsList />
      <Footer />
    </main>
  )
}

export default Projects
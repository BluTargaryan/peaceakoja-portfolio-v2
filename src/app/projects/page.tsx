import React from 'react'
import Footer from '../components/home/sections/Footer'
import HeroProjects from '../components/projects/sections/HeroProjects'

const Projects = () => {
  return (
    <main className="w-full bg-selfPrimary overflow-x-hidden scroll-smooth">
      <HeroProjects />
      <Footer />
    </main>
  )
}

export default Projects
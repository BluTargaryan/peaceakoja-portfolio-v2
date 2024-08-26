import React from 'react'
import Image from 'next/image'
import PortSystem from '../../../../../public/port asset sys.png'

import { lustria } from "@/app/layout"

const HeroProjects = () => {
  return (
    <header className='w-full py-12 flex flex-col items-center gap-9'>
         <div className='w-11/12 bg-selfBlue rounded-xl h-72 flex items-center justify-center border-2 border-selfSecondary
    lg:w-2/5 
    xl:w-1/2 xl:h-[480px]'>
    <Image 
    src={PortSystem}
    width="0"
    height="0"
    sizes="100vw"
    className="h-3/5 w-auto"
    alt="boy working on his computer setup"
   />
    </div>

    <h1 className={`${lustria.className} text-4xl text-center w-full  xl:text-6xl xl:leading-tight`}>Projects</h1>
    </header>
  )
}

export default HeroProjects
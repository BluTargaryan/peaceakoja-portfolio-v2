'use client'

import React from 'react'
import {motion as m} from 'framer-motion'
import { GoDotFill } from "react-icons/go";

const ScrollingText = () => {
  return (
    <div className=' w-full overflow-x-hidden'>
    <m.div
    className='h-10 w-fit text-xl bg-selfBlue text-selfPrimary flex gap-4 xl:h-20'
    initial={{ x: 0 }}
         animate={{ x: -1000 }}
         transition={{ 
            ease: 'easeIn', 
            duration: 8,
            repeat: Infinity}}
    >
{Array.from({ length: 20 }, (_, index) => (
 <span key={index} className="h-full w-fit flex items-center justify-center gap-4">
 <p className='whitespace-nowrap flex-shrink-0 xl:text-5xl'>Peace Akoja</p>
 {index < 19 && <GoDotFill className="text-base  xl:text-2xl" />}
</span>
))}

    </m.div>
    <m.div
    className='h-10 w-fit bg-selfSecondary text-xl text-selfPrimary flex gap-4 xl:h-20'
    initial={{ x: -1000}}
         animate={{ x: 0}}
         transition={{ 
            ease: 'easeIn', 
            duration: 8,
            repeat: Infinity}}
    >
{Array.from({ length: 20 }, (_, index) => (
  <span key={index} className="h-full w-fit flex items-center justify-center gap-4">
    <p className='whitespace-nowrap flex-shrink-0 xl:text-5xl'>Frontend Developer</p>
    {index < 19 && <GoDotFill className="text-base  xl:text-2xl" />}
  </span>
))}

    </m.div>
    </div>
  )
}

export default ScrollingText
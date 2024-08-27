import React from 'react'

import { lustria } from "@/app/utils"

import BobbleHead from '../../../../../public/profile image.png'
import PortCharEd from '../../../../../public/port char at work 1.png'
import PortCharExp from '../../../../../public/port char at work 2.png'
import JavaScript from  '../../../../../public/js.png'

import { aboutMe, toolkit } from '@/app/data-int/aboutme'
import Image from 'next/image'



const AboutHome = () => {
  return (
    <div className='py-32 flex flex-col items-center justify-center gap-20 xl:py-48 xl:gap-32'>
        <div className='h-56 w-56 bg-selfSecondary rounded-full overflow-hidden flex flex-col items-center justify-end xl:h-[560px] xl:w-[560px]'>
        <Image 
    src={BobbleHead}
    width="0"
    height="0"
    sizes="100vw"
    className="h-5/6 w-auto"
    alt="Cartoon profile image of web owner"
   />
        </div>



{aboutMe.map((item, index) => (
    <div key={index} className={`flex items-center justify-between w-[98%] ${item.reversed ? 'flex-row-reverse': 'flex-row'} lg:w-full lg:px-8`}>
      <div className={`w-11/12 ${item.color} rounded-xl h-72 items-center justify-center border-2 border-selfSecondary hidden
        lg:w-2/5 lg:flex
        xl:w-1/2 xl:h-[416px]`}>
        <Image 
          src={item.imgSrc}
          width="0"
          height="0"
          sizes="100vw"
          className="h-4/5 w-auto"
          alt="Image representing studious fellow" 
        />
      </div>
    
      <div className={`w-full flex flex-col gap-6 items-center justify-center lg:w-1/2 ${item.reversed ? 'lg:items-start': 'lg:items-end'} xl:gap-20`}>
        <h2 className={`${lustria.className} text-2xl xl:text-5xl`}>{item.topic}</h2>
        <ul className={`flex flex-col gap-3 w-11/12 text-center ${item.reversed ? 'lg:text-left': 'lg:text-right'} xl:text-2xl `}>
          {item.roles.map((role, idx) => (
            <li key={idx}>
              {role.title}, {role.location} <br/>
              {role.dateRange}
            </li>
          ))}
        </ul>
      </div>
    </div>
  
))}

<div className='flex flex-col gap-10 items-center xl:gap-20'>
<h2 className={`${lustria.className} text-2xl xl:text-5xl`}>Toolkit</h2>
<div className='w-full flex items-center justify-center gap-8 flex-wrap px-7 xl:gap-24'>
   {toolkit.map((item, index)=>(
     <div key={index} className='flex flex-col gap-3 items-center justify-center xl:gap-5'>
     <div className='w-12 h-12 flex justify-center xl:h-24 xl:w-24'>
     <Image 
     src={item.img}
     width="0"
     height="0"
     sizes="100vw"
     className="h-full w-auto"
     alt="boy working on his computer setup"
    />
       </div>
       <p className='xl:text-2xl'>{item.tool}</p>
     </div>
   ))}

</div>
</div>
    </div>
  )
}

export default AboutHome
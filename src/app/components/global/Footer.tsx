import React from 'react'




import { lustria } from "@/app/utils"
import {linkData} from '@/app/data-int/links'
import LinksList from './subComps/LinksList'

const Footer = () => {
   

  return (
    <footer className='bg-selfSecondary py-10 flex flex-col items-center gap-7 text-selfPrimary xl:py-20 xl:gap-16'>
        <h2 className={`${lustria.className} text-2xl xl:text-5xl`}>Links</h2>
        <LinksList />

        <p className='xl:text-2xl'>Painted by Peace</p>
    </footer>
  )
}

export default Footer
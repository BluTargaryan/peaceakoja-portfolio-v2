"use client";

import { usePathname } from 'next/navigation';  
import Link from 'next/link'

const Nav = () => {

    const pathname = usePathname();

    const menuList = [
        {
            name: 'Intro',
            link: '/'
        },
        {
            name: 'Works',
            link: '/works'
        },
        {
            name: 'History',
            link: '/history'
        },
        {
            name: 'Links',
            link: '/links'
        }
    ]
  return (
    <nav className='flex bg-secondary w-full h-16 border-b-3 border-text'>
        { menuList.map((item) => (
            <Link
                href={item.link}
                key={item.name}
                className={`text-xs font-orbitron font-semibold w-full flex items-center justify-center
                    ${menuList.indexOf(item) !== menuList.length - 1 ? "border-r-3 border-text" : ""}
                    ${item.link === pathname ? "bg-accent" : "bg-primary"} transition-all duration-300
                    `}
            >
                <span>{item.name}</span>
            </Link>
        )) }
    </nav>
  )
}

export default Nav
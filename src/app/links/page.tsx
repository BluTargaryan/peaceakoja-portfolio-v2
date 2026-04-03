

import React from 'react'
import LinkItem from '../components/atoms/LinkItem'
import linksData from '../data/links.json'
import phoneIcon from '../assets/images/Phone.svg'
import emailIcon from '../assets/images/Email.svg'
import dribbbleIcon from '../assets/images/dribbble-icon.svg'
import githubIcon from '../assets/images/github-icon.svg'

const ICON_MAP: Record<string, string> = {
  '/assets/images/Phone.svg': phoneIcon.src,
  '/assets/images/Email.svg': emailIcon.src,
  '/assets/images/dribbble-icon.svg': dribbbleIcon.src,
  '/assets/images/github-icon.svg': githubIcon.src,
}

const Links = () => {
  return (
    <main className="flex flex-col items-center h-full w-full py-23 overflow-y-scroll">

<section className="flex flex-col items-center text-center w-[260px] mb-12 gap-4">
<h1>Links</h1>
<p>Links to contact me or check out my work.</p>
</section>

<section className="flex flex-col items-center w-[260px] gap-3">
  {linksData.map((item) => (
    <LinkItem
      key={item.name}
      name={item.name}
      description={item.description}
      linkText={item.linkText}
      link={item.link}
      headerIconSrc={ICON_MAP[item.icon] ?? item.icon}
      headerIconAlt={item.name}
    />
  ))}
</section>





    </main>
  )
}

export default Links

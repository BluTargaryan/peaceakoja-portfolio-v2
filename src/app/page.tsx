import Image from "next/image";
import subjectMobile from "@/app/assets/images/subject-mobile.png";
import subject from "@/app/assets/images/subject.png";
import introData from "@/app/data/intro.json";
import linksData from "@/app/data/links.json";
import phoneIcon from '@/app/assets/images/Phone.svg'
import emailIcon from '@/app/assets/images/Email.svg'
import dribbbleIcon from '@/app/assets/images/dribbble-icon.svg'
import githubIcon from '@/app/assets/images/github-icon.svg'

const ICON_MAP: Record<string, string> = {
  '/assets/images/Phone.svg': phoneIcon.src,
  '/assets/images/Email.svg': emailIcon.src,
  '/assets/images/dribbble-icon.svg': dribbbleIcon.src,
  '/assets/images/github-icon.svg': githubIcon.src,
}
import LinkItem from "@/app/components/atoms/LinkItem";

export default function Home() {
  const first = introData[0] ?? {};
  const name = first.name ?? "Peace Akoja";
  const role = first.title ?? "Frontend Engineer";
  const bio = first.content ?? "";

  return (
   <main className="flex flex-col items-center h-full w-full py-23 gap-12 overflow-y-scroll
   xl:gap-30
   ">
   
   <section className="flex flex-col items-center text-center w-[260px] gap-4
   md:gap-12 md:w-[323px] 
   
   xl:flex-row xl:w-[1144px] xl:gap-0 xl:justify-between
   ">
    <div className="p-2.5 border-3 border-text w-full h-[289px]
    md:w-full md:h-[350px]
    xl:w-[449px] xl:h-[592px] xl:p-6.5
    ">
      <Image 
      src={subjectMobile} 
      alt="owner of portfolio" width={600} height={600} 
      className="w-full h-full object-cover object-center border-3 border-text p-0 hover:scale-105 transition-all duration-300 xl:hidden"
      />
      <Image 
      src={subject} 
      alt="owner of portfolio" width={900} height={900} 
      className="w-full h-full object-cover object-center border-3 border-text p-0 hover:scale-105 transition-all duration-300 hidden xl:block"
      />
    </div>
<div className="flex flex-col items-center gap-6 shrink-0 xl:items-start xl:w-[564px] xl:gap-16">
<div className="flex flex-col gap-2 text-center 
 xl:text-left
">
  <h1>{name}</h1>
  <span className="text-2xl font-orbitron font-semibold text-primary xl:text-5xl">{role}</span>
</div>

<p className="text-center xl:text-left">
  {bio}
</p>
</div>
</section>

<section className="flex flex-col items-center w-[260px] gap-6 md:w-[323px] xl:w-[1144px] xl:items-start xl:gap-14"> 
<div className="flex flex-col items-center text-center gap-2 xl:text-left xl:items-start xl:gap-3">
<h1>Links</h1>
<p>Links to contact me or check out my work.</p>
</div>

<div className="flex flex-col items-center gap-3 xl:gap-6 xl:flex-row xl:flex-wrap xl:items-start">
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
</div>
</section>
   </main>
  );
}

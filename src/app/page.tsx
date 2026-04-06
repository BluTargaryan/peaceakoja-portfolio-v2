import Image from "next/image";
import subjectMobile from "@/app/assets/images/subject-mobile.png";
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
   <main className="flex flex-col items-center h-full w-full py-23 gap-12 overflow-y-scroll">
   
   <section className="flex flex-col items-center text-center w-[260px] gap-4">
    <div className="p-2.5 border-3 border-text w-[250px] h-[289px]">
      <Image 
      src={subjectMobile} 
      alt="owner of portfolio" width={300} height={300} 
      className="w-full h-full object-cover object-center border-3 border-text p-0"
      />
    </div>

<div className="flex flex-col gap-2 text-center w-[250px]">
  <h1>{name}</h1>
  <span className="text-2xl font-orbitron font-semibold text-primary">{role}</span>
</div>

<p className="text-center w-[250px]">
  {bio}
</p>
</section>

<section className="flex flex-col items-center w-[260px] gap-4"> 
<div className="flex flex-col items-center text-center w-[260px] gap-2">
<h1>Links</h1>
<p>Links to contact me or check out my work.</p>
</div>

<div className="flex flex-col items-center w-[260px] gap-3">
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

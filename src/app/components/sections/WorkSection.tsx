import React from "react";
import worksData from "@/app/data/works.json";
import WorkLinkButton from "@/app/components/atoms/WorkLinkButton";

const WorkSection = () => {
  return (
    <section className="flex flex-col items-center text-center gap-9 w-[260px] ">

{worksData.map((work) => (
  
    <div 
    key={work.name}
    className="flex flex-col items-center text-center gap-9 w-full ">
<div className="flex flex-col items-center text-center gap-4 w-full ">
<h3>Project name</h3>
<span className="text-xl font-orbitron font-bold text-primary">{work.name}</span>
</div>
<div className="flex flex-col gap-4 w-50 justify-center">
<h3>Project links</h3>
<div className="flex flex-col gap-3.5 w-full justify-between">
              {work.links.map((link) => (
                <WorkLinkButton key={link.name} name={link.name} url={link.url} />
              ))}
              </div>
            </div>

<div className="flex flex-col items-center text-center gap-4 w-full ">
<h3>Work done</h3>
<p>{work.description}</p>
</div>
            </div>
  

))} 
</section>
  )
}

export default WorkSection
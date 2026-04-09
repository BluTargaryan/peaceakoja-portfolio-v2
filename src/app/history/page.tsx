import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";

const History = () => {


  return (
    <main className="flex flex-col items-center h-full w-full py-23 overflow-y-scroll">

<section className="flex flex-col items-center text-center w-[260px] mb-30 gap-4
md:mb-20 
xl:w-[1144px] xl:items-start xl:mb-25
">
<h1>History</h1>
<p>My education and experience as a frontend engineer.</p>
</section>

<div className="mb-20 w-full flex flex-col items-center
xl:w-[1144px] xl:gap-16
">
  <EducationSection />
  </div>

  <div className="mb-20 w-full flex flex-col items-center
  xl:w-[1144px] xl:gap-16
  ">
  <ExperienceSection />
  </div>

  <div className="w-full flex flex-col items-center
  xl:w-[1144px] xl:gap-16
  ">
  <SkillsSection />
  </div>

    </main>
  )
}

export default History
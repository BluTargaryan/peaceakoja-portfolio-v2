import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";

const History = () => {


  return (
    <main className="flex flex-col items-center h-full w-full py-23 overflow-y-scroll">

<section className="flex flex-col items-center text-center w-[260px] mb-30 gap-4">
<h1>History</h1>
<p>My education and experience as a frontend engineer.</p>
</section>

<div className="mb-20">
  <EducationSection />
  </div>

  <div className="mb-20">
  <ExperienceSection />
  </div>

  <div className="">
  <SkillsSection />
  </div>

    </main>
  )
}

export default History
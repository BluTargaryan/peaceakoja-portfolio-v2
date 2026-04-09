
import WorkSection from "../components/sections/WorkSection";

// Sheets CMS version (kept for reference)
// import { fetchSheet } from "@/app/lib/fetchSheet";
// const Works = async () => {
//   const url = process.env.SHEETS_PAGETITLE_URL;
//   const pageTitle = url ? await fetchSheet(url) : [];
//   const pageTitleData = pageTitle.find(
//     (item: any) => item.title === "Works" || item.Title === "Works"
//   ) ?? {};
//   return (...)
// };

const Works = () => {


  return (
    <main className="flex flex-col items-center h-full w-full py-23 overflow-y-scroll">

<section className="flex flex-col items-center text-center w-[260px] mb-12 gap-4 md:w-[323px] md:mb-17

xl:w-[1144px] xl:items-start xl:mb-28
">
<h1>Works</h1>
<p>Live websites I have worked on, associated links and a brief description of what I did.</p>
</section>

<WorkSection />



    </main>
  )
}

export default Works
import Image from "next/image";
import subjectMobile from "@/app/assets/images/subject-mobile.png";
import { fetchSheet } from "@/app/lib/fetchSheet";

export default async function Home() {
  const url = process.env.SHEETS_INTRO_URL;
  const intro = url ? await fetchSheet(url) : [];
  const first = intro[0] ?? {};

  const name =
    first.name ??
    first.Name ??
    "Peace Akoja";

  const role =
    first.title ??
    first.Title ??
    "Frontend Engineer";

  const bio =
    first.Content??
    first.content ??
    "I'm a frontend engineer with a passion for building user-friendly and efficient web applications. I'm a quick learner and I'm always looking for new challenges.";

  return (
   <main className="flex flex-col items-center h-full w-full py-23 gap-6.5 overflow-y-scroll">
   
    <section className="p-2.5 border-3 border-text w-[250px] h-[289px]">
      <Image 
      src={subjectMobile} 
      alt="owner of portfolio" width={300} height={300} 
      className="w-full h-full object-cover object-center border-3 border-text p-0"
      />
    </section>

<section className="flex flex-col gap-1 text-center w-[250px]">
  <h1>{name}</h1>
  <span className="text-2xl font-orbitron font-semibold text-primary">{role}</span>
</section>

<p className="text-center w-[250px]">
  {bio}
</p>

   </main>
  );
}

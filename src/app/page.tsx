import Image from "next/image";
import subjectMobile from "@/app/assets/images/subject-mobile.png";
import introData from "@/app/data/intro.json";

export default function Home() {
  const first = introData[0] ?? {};
  const name = first.name ?? "Peace Akoja";
  const role = first.title ?? "Frontend Engineer";
  const bio = first.content ?? "";

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

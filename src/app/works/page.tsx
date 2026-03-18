import React from 'react'
import { fetchSheet } from '@/app/lib/fetchSheet';
import WorkSection from '../components/sections/WorkSection';

const Works = async () => {
    const url = process.env.SHEETS_PAGETITLE_URL;
    const pageTitle = url ? await fetchSheet(url) : [];
    const pageTitleData = pageTitle.find(
      (item: any) => item.title === "Works" || item.Title === "Works"
    ) ?? {};

  return (
    <main className="flex flex-col items-center h-full w-full py-23 overflow-y-scroll">

<section className="flex flex-col items-center text-center w-[272px] mb-40 gap-4">
<h1>{pageTitleData.title}</h1>
<p>{pageTitleData.supportText}</p>
</section>

<WorkSection />



    </main>
  )
}

export default Works
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { fetchSheet, ArticleRow } from '@/app/lib/fetchSheet'
import { fetchDocHtml } from '@/app/lib/fetchDocHtml'
import { slugify } from '@/app/lib/slugify'

export const revalidate = 300

async function getRows(): Promise<ArticleRow[]> {
  const url = process.env.SHEETS_BLOG_URL
  if (!url) return []
  return (await fetchSheet(url)) as ArticleRow[]
}

export async function generateStaticParams() {
  const rows = await getRows()
  return rows.map((row) => ({ id: slugify(`${row.title}-${row.date}`) }))
}

type Props = {
  params: Promise<{ id: string }>
}

const Article = async ({ params }: Props) => {
  const { id } = await params
  const rows = await getRows()
  const row = rows.find((r) => slugify(`${r.title}-${r.date}`) === id)

  if (!row) notFound()

  const bodyHtml = await fetchDocHtml(row.docUrl)
  const cover = row.image?.trim() || undefined

  return (
    <main className="flex flex-col items-center h-full w-full py-23 gap-8 overflow-y-scroll">

      <section className="flex flex-col items-center text-center w-[260px] md:w-full md:px-20 gap-2 xl:w-[1144px] xl:items-start xl:text-left">
        <h1>{row.title}</h1>
        <span className="text-sm text-text xl:text-base">{row.date}</span>
        <p>{row.description}</p>
      </section>

      <section className="flex flex-col items-center text-center w-[260px] md:w-full md:px-20 gap-4 xl:w-[1144px] xl:items-start xl:text-left">

      {cover ? (
       
          <Image
            src={cover}
            alt={row.title}
            className="w-[260px] h-auto object-cover md:h-96 md:w-auto xl:h-[400px] xl:w-auto"
            width={260}
            height={260}
            priority
          />
        
      ) : null}

      <article
        className="article w-[260px] md:w-full md:px-20 flex flex-col gap-4 xl:w-[1144px] xl:items-start xl:text-left xl:px-0 xl:gap-8"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />

      </section>

    </main>
  )
}

export default Article

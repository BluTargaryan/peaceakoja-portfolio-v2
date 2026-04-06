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

      <section className="flex flex-col items-center text-center w-[260px] gap-2">
        <h1>{row.title}</h1>
        <span className="text-sm text-text">{row.date}</span>
        <p>{row.description}</p>
      </section>

      <section className="flex flex-col items-center text-center w-[260px] gap-4">

      {cover ? (
       
          <Image
            src={cover}
            alt={row.title}
            className="w-[260px] h-auto object-cover"
            width={260}
            height={260}
            priority
          />
        
      ) : null}

      <article
        className="w-[260px] flex flex-col gap-4"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />

      </section>

    </main>
  )
}

export default Article

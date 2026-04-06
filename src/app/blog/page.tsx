import React from 'react'
import ArticleItem from '../components/atoms/ArticleItem'
import { fetchSheet, ArticleRow } from '../lib/fetchSheet'
import { slugify } from '../lib/slugify'

export const revalidate = 300

const Blog = async () => {
  const url = process.env.SHEETS_BLOG_URL
  const rows: ArticleRow[] = url ? (await fetchSheet(url)) as ArticleRow[] : []

  return (
    <main className="flex flex-col items-center h-full w-full py-23 gap-12 overflow-y-scroll">

      <section className="flex flex-col items-center text-center w-[260px] gap-4">
        <h1>Blog</h1>
        <p>Articles I have written on technologies, practices and other topics related to frontend development.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center w-[260px] gap-8">
        {rows.length === 0 ? (
          <p className="text-text/60 text-sm">No articles yet.</p>
        ) : (
          rows.map((row) => (
            <ArticleItem
              key={slugify(`${row.title}-${row.date}`)}
              title={row.title}
              date={row.date}
              description={row.description}
              image={row.image?.trim() || undefined}
            />
          ))
        )}
      </section>

    </main>
  )
}

export default Blog

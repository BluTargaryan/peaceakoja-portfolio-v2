# Peace Akoja — Portfolio v2

A personal portfolio for Peace Akoja, frontend engineer. Built with Next.js 15 (App Router), Tailwind CSS v4, and a Google Sheets-powered CMS for blog content.

---

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Fonts:** Orbitron & Inter via `next/font/google`
- **CMS:** Google Sheets (published as CSV) — parsed with [PapaParse](https://www.papaparse.com/)
- **Language:** TypeScript

---

## Pages

| Route | Description |
|---|---|
| `/` | Intro — photo, name, role, bio, and contact/social links |
| `/works` | Portfolio — live projects with links and descriptions |
| `/history` | Background — education, work experience, and skills |
| `/blog` | Articles — fetched from Google Sheets at runtime |
| `/blog/[id]` | Article detail — full post rendered from a Google Doc |

---

## Project Structure

```
src/app/
├── page.tsx                     # Intro page
├── works/page.tsx               # Works page
├── history/page.tsx             # History page
├── blog/
│   ├── page.tsx                 # Blog listing
│   └── [id]/page.tsx            # Individual article
├── components/
│   ├── sections/
│   │   ├── Nav.tsx              # Top navigation bar
│   │   ├── WorkSection.tsx      # Work cards
│   │   ├── EducationSection.tsx # Education timeline
│   │   ├── ExperienceSection.tsx# Experience timeline
│   │   └── SkillsSection.tsx    # Skills grid
│   └── atoms/
│       ├── WallpaperBackground.tsx
│       ├── LinkItem.tsx
│       ├── WorkLinkButton.tsx
│       ├── ArticleItem.tsx
│       └── MaskIcon.tsx
├── data/                        # Static JSON content
│   ├── intro.json
│   ├── links.json
│   ├── works.json
│   ├── experience.json
│   ├── education.json
│   └── skills.json
└── lib/
    ├── fetchSheet.ts            # Google Sheets CSV fetcher (PapaParse)
    ├── fetchDocHtml.ts          # Google Docs HTML fetcher (blog body)
    └── slugify.ts               # URL slug utility
```

---

## Content Management

Static content (intro, works, experience, education, skills, links) lives in `src/app/data/*.json`.

Blog articles are fetched from a **Google Sheet published as CSV**. Each row represents one article. Individual article bodies are fetched from a linked **Google Doc** and rendered as HTML. Blog pages use ISR with a 5-minute revalidation window (`revalidate = 300`).

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
SHEETS_BLOG_URL="<your-google-sheet-blog-csv-url>"
```

The sheet should have columns: `title`, `date`, `description`, `docUrl`, `image` (optional).

> **Note:** Do not commit `.env.local` to version control.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design Tokens

Defined in `src/app/globals.css` and available as Tailwind utilities:

| Token | Value | Tailwind class |
|---|---|---|
| Background | `#F2F2F2` | `bg-background` |
| Text | `#0D0D0D` | `text-text` |
| Primary | `#1D5479` | `text-primary` / `bg-primary` |
| Secondary | `#B7DEF7` | `bg-secondary` |
| Accent | `#DF6C06` | `text-accent` / `bg-accent` |

---

## Deployment

Deploy to [Vercel](https://vercel.com) — add your environment variables in the Vercel project settings.

```bash
vercel deploy
```

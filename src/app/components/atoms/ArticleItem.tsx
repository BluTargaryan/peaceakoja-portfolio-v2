import Image from 'next/image'
import Link from 'next/link'
import { slugify } from '@/app/lib/slugify'
import MaskIcon from './MaskIcon'
import longArrowIcon from '@/app/assets/images/longArrowRight.svg'

type ArticleItemProps = {
  title: string
  className?: string
  date: string
  description: string
  image?: string
}

const ArticleItem = ({ title, className, date, description, image }: ArticleItemProps) => {
  const cover = image?.trim() || undefined

  return (
    <Link href={`/blog/${slugify(`${title}-${date}`)}`} className={`flex flex-col gap-2 border-b border-primary/60 pb-4 ${className}`}>
      {cover ? (
        <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden ">
          <Image
            src={cover}
            alt=""
            fill
            className="object-cover"
            sizes="260px"
          />
        </div>
      ) : 
      <div className="relative aspect-4/3 w-full shrink-0 bg-primary">
        </div>
      }
      <h2 className="font-orbitron font-medium text-text">{title}</h2>
      <span className="text-xs text-text/60">{date}</span>
      <p className="line-clamp-3 overflow-hidden text-ellipsis">{description}</p>

      <span className="flex items-center justify-start gap-2 transition-all duration-300 hover:underline hover:text-accent  hover:gap-3 group
      [--icon-color:var(--text)] hover:[--icon-color:var(--accent)]
      ">
        <span className="font-orbitron font-medium text-text group-hover:text-accent">Read more</span>
        <MaskIcon
          src={longArrowIcon.src}
          alt=""
          className="w-3 h-3"
          style={{ backgroundColor: "var(--icon-color)"}}
        />
      </span>
    </Link>
  )
}

export default ArticleItem

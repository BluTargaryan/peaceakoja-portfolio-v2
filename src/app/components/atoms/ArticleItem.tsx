import Image from 'next/image'
import Link from 'next/link'
import { slugify } from '@/app/lib/slugify'
import MaskIcon from './MaskIcon'
import longArrowIcon from '@/app/assets/images/longArrowRight.svg'
import noImage from '@/app/assets/images/noImage.png'

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
            className="object-cover hover:scale-105 transition-all duration-300"
            sizes="260px"
          />
        </div>
      ) : 
      <div className="relative aspect-4/3 w-full shrink-0 bg-primary">
        <Image
          src={noImage}
          alt="No image"
          fill
          className="object-cover"
        />
        </div>
      }
      <div className="flex flex-col gap-1 xl:gap-2">
      <h3 className="font-orbitron font-medium text-text">{title}</h3>
      <span className="text-xs text-text/60 xl:text-base">{date}</span>
      <p className="line-clamp-3 overflow-hidden text-ellipsis">{description}</p>

      <span className="flex items-center justify-start gap-2 transition-all duration-300 hover:underline hover:text-accent  hover:gap-3 group
      [--icon-color:var(--text)] hover:[--icon-color:var(--accent)]
      ">
        <span className="text-sm font-orbitron font-medium text-text group-hover:text-accent xl:text-base">Read more</span>
        <MaskIcon
          src={longArrowIcon.src}
          alt=""
          className="w-3 h-3 xl:w-4 xl:h-4"
          style={{ backgroundColor: "var(--icon-color)"}}
        />
      </span>
      </div>
    </Link>
  )
}

export default ArticleItem

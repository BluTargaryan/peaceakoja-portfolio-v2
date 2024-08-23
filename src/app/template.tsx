'use client'

import { motion as m} from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ x: -10, opacity:0 }}
      animate={{ x: 0, opacity:1 }}
      exit={{ x: 10, opacity:0 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      {children}
    </m.div>
  )
}
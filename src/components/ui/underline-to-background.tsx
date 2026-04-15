'use client'

import { cn } from '@/lib/utils'

interface UnderlineToBackgroundProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function UnderlineToBackground({
  href,
  children,
  className,
}: UnderlineToBackgroundProps) {
  return (
    <a href={href} className={cn('utb-link', className)}>
      {children}
    </a>
  )
}

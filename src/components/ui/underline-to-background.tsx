'use client'

import posthog from 'posthog-js'
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
    <a
      href={href}
      className={cn('utb-link', className)}
      onClick={() => posthog.capture('email_link_clicked', { href })}
    >
      {children}
    </a>
  )
}

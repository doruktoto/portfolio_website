'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out"
      style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.4)' }}
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1600}
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-lg object-contain"
          priority
        />
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { MediaItem } from '@/lib/projects'
import Lightbox from '@/components/Lightbox'

interface MediaStripProps {
  media: MediaItem[]
  folderName: string
}

export default function MediaStrip({ media, folderName }: MediaStripProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        {media.map((item) => {
          const url = `/projects/${folderName}/${item.filename}`
          return (
            <div key={item.id} className="inline-flex flex-col flex-shrink-0">
              {item.type === 'video' ? (
                <video
                  src={url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-64 w-auto rounded-2xl"
                />
              ) : (
                <button
                  className="focus:outline-none cursor-zoom-in"
                  onClick={() => setLightbox({ src: url, alt: item.caption })}
                  aria-label={`View ${item.caption}`}
                >
                  <Image
                    src={url}
                    alt={item.caption}
                    width={1200}
                    height={800}
                    className="h-64 w-auto rounded-2xl"
                    style={{ height: '16rem', width: 'auto' }}
                  />
                </button>
              )}
              <p className="mt-2 text-xs text-neutral-500 max-w-[20rem]">
                {item.caption}
              </p>
            </div>
          )
        })}
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}

'use client'

import Image from 'next/image'
import type { MediaItem } from '@/lib/projects'

interface MediaStripProps {
  media: MediaItem[]
  folderName: string
}

export default function MediaStrip({ media, folderName }: MediaStripProps) {
  return (
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
              <Image
                src={url}
                alt={item.caption}
                width={1200}
                height={800}
                className="h-64 w-auto rounded-2xl"
                style={{ height: '16rem', width: 'auto' }}
              />
            )}
            <p className="mt-2 text-xs text-neutral-500 max-w-[20rem] line-clamp-2">
              {item.caption}
            </p>
          </div>
        )
      })}
    </div>
  )
}

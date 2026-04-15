'use client'

import MediaStrip from '@/components/MediaStrip'
import type { Project } from '@/lib/projects'

interface ProjectItemProps {
  project: Project
  isOpen: boolean
  onToggle: () => void
}

export default function ProjectItem({
  project,
  isOpen,
  onToggle,
}: ProjectItemProps) {
  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium tracking-wide">
          {project.displayName}
        </span>
        <span
          className="text-neutral-400 text-lg leading-none transition-transform duration-300 ml-4 flex-shrink-0"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '1200px' : '0px' }}
      >
        <div className="pb-6">
          {project.description && (
            <p className="text-sm text-neutral-600 leading-relaxed mb-5 max-w-prose">
              {project.description}
            </p>
          )}
          {project.media.length > 0 && (
            <MediaStrip media={project.media} folderName={project.folderName} />
          )}
        </div>
      </div>
    </div>
  )
}

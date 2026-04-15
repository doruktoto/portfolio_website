'use client'

import { useState } from 'react'
import ProjectItem from '@/components/ProjectItem'
import type { Project } from '@/lib/projects'

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  return (
    <div className="border-t border-neutral-200">
      {projects.map((project) => (
        <ProjectItem
          key={project.slug}
          project={project}
          isOpen={openSlug === project.slug}
          onToggle={() =>
            setOpenSlug(openSlug === project.slug ? null : project.slug)
          }
        />
      ))}
    </div>
  )
}

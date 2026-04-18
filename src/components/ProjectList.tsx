'use client'

import { useState } from 'react'
import posthog from 'posthog-js'
import ProjectItem from '@/components/ProjectItem'
import type { Project } from '@/lib/projects'

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  const handleToggle = (project: Project) => {
    const isCurrentlyOpen = openSlug === project.slug
    if (isCurrentlyOpen) {
      posthog.capture('project_collapsed', { project_name: project.displayName, project_slug: project.slug })
      setOpenSlug(null)
    } else {
      posthog.capture('project_expanded', { project_name: project.displayName, project_slug: project.slug })
      setOpenSlug(project.slug)
    }
  }

  return (
    <div className="border-t border-neutral-200">
      {projects.map((project) => (
        <ProjectItem
          key={project.slug}
          project={project}
          isOpen={openSlug === project.slug}
          onToggle={() => handleToggle(project)}
        />
      ))}
    </div>
  )
}

import Image from 'next/image'
import { getProjects, getBio } from '@/lib/projects'
import ProjectList from '@/components/ProjectList'
import { UnderlineToBackground } from '@/components/ui/underline-to-background'

export default function Home() {
  const projects = getProjects()
  const bio = getBio()

  return (
    <main className="flex flex-col md:flex-row md:h-screen">
      {/* Bio — top on mobile, right column on desktop */}
      <aside className="md:w-[35%] md:h-screen md:overflow-y-auto md:order-last">
        <div className="p-8 pb-4">
          <Image
            src="/profile.jpg"
            alt="Doruk Ruzto"
            width={800}
            height={1000}
            className="w-full object-cover rounded-lg"
            priority
          />
        </div>
        <div className="p-8">
          <p className="text-sm leading-relaxed text-neutral-700">{bio}</p>
          <div className="mt-4">
            <UnderlineToBackground href="mailto:doruk@lirlabs.com">
              doruk@lirlabs.com
            </UnderlineToBackground>
          </div>
        </div>
      </aside>

      {/* Projects — below bio on mobile, left column on desktop */}
      <section className="md:flex-1 md:h-full md:overflow-y-auto md:order-first px-8 py-8 md:px-12 md:py-10">
        <ProjectList projects={projects} />
      </section>
    </main>
  )
}

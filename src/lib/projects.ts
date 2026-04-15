import fs from 'fs'
import path from 'path'

export type MediaItem = {
  id: string
  filename: string
  caption: string
  type: 'image' | 'video'
}

export type Project = {
  slug: string
  folderName: string
  displayName: string
  description: string
  media: MediaItem[]
}

const VIDEO_EXTENSIONS = ['.mov', '.mp4']

export function getProjects(): Project[] {
  const projectsDir = path.join(process.cwd(), 'content', 'projects')
  const folders = fs
    .readdirSync(projectsDir)
    .filter((f) => fs.statSync(path.join(projectsDir, f)).isDirectory())
    .sort()

  return folders.map((folder) => {
    const folderPath = path.join(projectsDir, folder)

    const displayName = folder
      .replace(/^\d+_/, '')
      .replace(/_/g, ' ')

    const slug = folder.toLowerCase().replace(/^\d+_/, '').replace(/_/g, '-')

    const descPath = path.join(folderPath, 'project_description.txt')
    const description = fs.existsSync(descPath)
      ? fs.readFileSync(descPath, 'utf-8').trim()
      : ''

    const captionsPath = path.join(folderPath, 'captions.json')
    const captions: { id: string; filename: string; caption: string }[] =
      fs.existsSync(captionsPath)
        ? JSON.parse(fs.readFileSync(captionsPath, 'utf-8'))
        : []

    const media: MediaItem[] = captions.map((item) => {
      const ext = path.extname(item.filename).toLowerCase()
      const type = VIDEO_EXTENSIONS.includes(ext) ? 'video' : 'image'
      return { ...item, type }
    })

    return { slug, folderName: folder, displayName, description, media }
  })
}

export function getBio(): string {
  const bioPath = path.join(process.cwd(), 'content', 'bio.txt')
  return fs.existsSync(bioPath) ? fs.readFileSync(bioPath, 'utf-8').trim() : ''
}

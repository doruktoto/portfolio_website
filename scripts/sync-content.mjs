import fs from 'fs'
import path from 'path'

const src = path.join(process.cwd(), 'content', 'projects')
const dest = path.join(process.cwd(), 'public', 'projects')

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true })
  for (const entry of fs.readdirSync(from)) {
    const srcEntry = path.join(from, entry)
    const destEntry = path.join(to, entry)
    const stat = fs.statSync(srcEntry)
    if (stat.isDirectory()) {
      copyDir(srcEntry, destEntry)
    } else {
      fs.copyFileSync(srcEntry, destEntry)
    }
  }
}

copyDir(src, dest)

fs.copyFileSync(
  path.join(process.cwd(), 'content', 'profile.jpg'),
  path.join(process.cwd(), 'public', 'profile.jpg')
)

console.log('Content synced to /public')

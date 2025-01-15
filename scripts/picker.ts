import fs from 'node:fs/promises'
import process from 'node:process'
import { execa } from 'execa'
// @ts-expect-error types
import prompts from 'prompts'

async function startPicker(args: string[]) {
  const folders = (
    await fs.readdir(new URL('../apps', import.meta.url), { withFileTypes: true })
  )
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(folder => ['client', 'server'].includes(folder))

  const result = args.includes('-y')
    ? { folder: folders[0] }
    : await prompts([
      {
        type: 'select',
        name: 'folder',
        message: 'Pick a folder',
        choices: folders.map(folder => ({ title: folder, value: folder })),
      },
    ])

  args = args.filter(arg => arg !== '-y')

  if (result.folder) {
    const commands = {
      client: 'dev',
      server: 'start',
    } as const
    const selectedCommand = commands[result.folder as keyof typeof commands]

    if (!selectedCommand) {
      process.exit(1)
    }
    await execa('pnpm', ['run', selectedCommand], {
      cwd: new URL(`../apps/${result.folder}`, import.meta.url),
      stdio: 'inherit',
    })
  }
}

await startPicker(process.argv.slice(2))

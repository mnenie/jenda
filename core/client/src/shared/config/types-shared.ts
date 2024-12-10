import type { IconifyIcon } from '@iconify/vue'

interface Path {
  pathName: string
}

export interface WorkspaceLink extends Path {
  id: number
  name: string
  icon?: IconifyIcon | string
}
export interface ProjectLink extends Path {
  _id: string
  name: string
  color?: string
}

export type CombinedLink = WorkspaceLink | ProjectLink

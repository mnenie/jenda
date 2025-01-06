import type { IconifyIcon } from '@iconify/vue'
import type { Ref } from 'vue'

export interface Expanded {
  isExpanded: Ref<boolean>
  onToggleArea: () => void
}

export interface AuthWorkspace {
  reset: () => void
  openFileChooser: (event: any) => void
}

export interface Filtered {
  sortModel: Ref<string>
  advancedModel: Ref<string[]>
}

interface Path {
  pathName: string
}

export interface WorkspaceLink extends Path {
  id: number
  name: string
  icon: IconifyIcon | string
}
export interface ProjectLink extends Path {
  _id: string
  name: string
  color?: string
}

export type CombinedLink = WorkspaceLink | ProjectLink

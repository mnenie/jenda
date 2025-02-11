import type { IconifyIcon } from '@iconify/vue'
import type { RouteRecordName } from 'vue-router/auto'

interface Path {
  pathName: string
}

export interface WorkspaceLink extends Path {
  id?: number
  name: RouteRecordName
  icon: IconifyIcon | string
  badge?: boolean
}

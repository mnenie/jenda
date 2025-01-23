import type { WorkspaceLink } from '../config/shared-types'

export const links: WorkspaceLink[] = [
  { id: 0, name: 'boards', pathName: 'boards', icon: 'hugeicons:trello' },
  { id: 1, name: 'notes', pathName: 'notes', icon: 'hugeicons:checkmark-square-03' },
  {
    id: 2,
    name: 'templates',
    pathName: 'templates',
    icon: 'hugeicons:dashboard-square-add',
  },
  {
    id: 3,
    name: 'calendar',
    pathName: 'calendar',
    icon: 'hugeicons:calendar-02',
  },
  { id: 4, name: 'members', pathName: 'members', icon: 'hugeicons:user-multiple-02' },
  { id: 5, name: 'settings', pathName: 'settings', icon: 'hugeicons:setting-07' },
]

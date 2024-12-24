import type { WorkspaceLink } from '@/shared/config/types-shared'

export const links: WorkspaceLink[] = [
  { id: 0, name: 'boards', pathName: 'boards', icon: 'hugeicons:trello' },
  { id: 1, name: 'tasks', pathName: 'tasks', icon: 'hugeicons:checkmark-square-03' },
  {
    id: 2,
    name: 'templates',
    pathName: 'templates',
    icon: 'hugeicons:dashboard-square-add',
  },
  {
    id: 3,
    name: 'analytics',
    pathName: 'analytics',
    icon: 'hugeicons:analytics-01',
  },
  { id: 4, name: 'members', pathName: 'members', icon: 'hugeicons:user-multiple-02' },
  { id: 5, name: 'settings', pathName: 'settings', icon: 'hugeicons:setting-07' },
]

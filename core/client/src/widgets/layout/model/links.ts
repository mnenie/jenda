import type { WorkspaceLink } from '@/shared/config/types-shared'
import type { MaybeRefOrGetter } from 'vue'
import { RouteNames } from '@/shared/config/consts'

export const links: MaybeRefOrGetter<WorkspaceLink[]> = [
  { id: 0, name: 'boards', pathName: RouteNames.boards, icon: 'hugeicons:trello' },
  {
    id: 1,
    name: 'templates',
    pathName: RouteNames.templates,
    icon: 'hugeicons:dashboard-square-add',
  },
  {
    id: 2,
    name: 'analytics',
    pathName: RouteNames.analytics,
    icon: 'hugeicons:analytics-01',
  },
  { id: 3, name: 'members', pathName: RouteNames.members, icon: 'hugeicons:user-multiple-02' },
  { id: 4, name: 'settings', pathName: RouteNames.settings, icon: 'hugeicons:setting-07' },
]

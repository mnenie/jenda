import type { Link } from './types'
import { RouteNames } from '@/shared/config/consts'

import { markRaw } from 'vue'

export const links = markRaw<Link[]>([
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
    icon: 'hugeicons:chart-increase',
  },
  { id: 3, name: 'members', pathName: RouteNames.members, icon: 'hugeicons:user-multiple-02' },
  { id: 4, name: 'settings', pathName: RouteNames.settings, icon: 'hugeicons:setting-07' },
])

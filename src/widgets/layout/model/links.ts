import { h, markRaw } from 'vue';
import type { Link } from './types';
import { RouteNames } from '@/shared/config/consts';

import { Kanban, Templates, Analytics, Members, Settings } from '@/shared/assets/icons';

export const links = markRaw<Link[]>([
  { id: 0, name: 'boards', pathName: RouteNames.boards, icon: h(Kanban) },
  { id: 1, name: 'templates', pathName: RouteNames.templates, icon: h(Templates) },
  { id: 2, name: 'analytics', pathName: RouteNames.analytics, icon: h(Analytics) },
  { id: 3, name: 'members', pathName: RouteNames.members, icon: h(Members) },
  { id: 4, name: 'settings', pathName: RouteNames.settings, icon: h(Settings) }
]);

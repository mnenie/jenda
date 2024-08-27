import { h, markRaw } from 'vue';
import type { Link } from '../types';
import { RouteNames } from '@/shared/config/consts';
import { SquareDashedKanban, Settings, Users, BringToFront } from 'lucide-vue-next';

export const links = markRaw<Link[]>([
  { id: 0, title: 'boards', pathName: RouteNames.boards, icon: h(SquareDashedKanban) },
  { id: 1, title: 'templates', pathName: RouteNames.templates, icon: h(BringToFront) },
  { id: 2, title: 'members', pathName: RouteNames.members, icon: h(Users) },
  { id: 3, title: 'settings', pathName: RouteNames.settings, icon: h(Settings) }
]);

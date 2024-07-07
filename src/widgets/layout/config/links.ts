import { h, ref } from 'vue';
import type { Link } from '../types';
import { RouteNames } from '@/shared/config/consts';
import { SquareDashedKanban, Settings, Users, BringToFront } from 'lucide-vue-next';

export const links = ref<Link[]>([
  { id: 0, title: 'Boards', pathName: RouteNames.boards, icon: h(SquareDashedKanban) },
  { id: 1, title: 'Templates', pathName: RouteNames.templates, icon: h(BringToFront) },
  { id: 2, title: 'Members', pathName: RouteNames.members, icon: h(Users) },
  { id: 3, title: 'Settings', pathName: RouteNames.settings, icon: h(Settings) }
]);

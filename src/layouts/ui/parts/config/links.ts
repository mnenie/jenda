import { h, ref } from 'vue';
import type { Link } from '../types';
import { RouteNames } from '@/shared/config/consts';
import { SquareDashedKanban, Settings, Users, History } from 'lucide-vue-next';

export const links = ref<Link[]>([
  { id: 0, title: 'Boards', pathName: RouteNames.dashboard, icon: h(SquareDashedKanban) },
  { id: 1, title: 'Members', pathName: RouteNames.members, icon: h(Users) },
  { id: 2, title: 'Recent', pathName: RouteNames.recent, icon: h(History) },
  { id: 2, title: 'Settings', pathName: RouteNames.settings, icon: h(Settings) }
]);

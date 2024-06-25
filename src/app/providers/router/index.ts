import { createRouter, createWebHistory } from 'vue-router';
import type { RouterRecord } from './types';
import { DefaultLayout, AuthLayout, SidebarLayout } from '@/layouts';
import { RouteNames } from '@/shared/config/consts';

const routes = [
  {
    path: '/',
    component: SidebarLayout,
    children: [
      {
        path: '',
        name: RouteNames.dashboard,
        component: () => import('@/pages/Dashboard.vue')
      }
    ]
  },
  {
    path: '/user',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: RouteNames.login,
        component: () => import('@/pages/Login.vue')
      },
      {
        path: 'registration',
        name: RouteNames.registration,
        component: () => import('@/pages/Registration.vue')
      }
    ]
  }
] satisfies readonly RouterRecord[];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

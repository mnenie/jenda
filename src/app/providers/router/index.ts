import { createRouter, createWebHistory } from 'vue-router';
import type { RouterRecord } from './types';
import { AuthLayout, SidebarLayout } from '@/layouts';
import { RouteNames } from '@/shared/config/consts';

const routes = [
  {
    name: RouteNames.boards,
    path: '/',
    component: () => import('@/pages/Boards.vue'),
    meta: {
      layout: SidebarLayout,
      requiresAuth: true
    }
  },
  {
    name: RouteNames.login,
    path: '/user/login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      layout: AuthLayout,
      requiresAuth: false
    }
  },
  {
    name: RouteNames.registration,
    path: '/user/registration',
    component: () => import('@/pages/Registration.vue'),
    meta: {
      layout: AuthLayout,
      requiresAuth: false
    }
  }
] satisfies readonly RouterRecord[];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

router.beforeEach((to, from) => {
  // TODO: Add authentication logic here
  if (to.meta.requiresAuth === true) {
    return router.push({ name: RouteNames.login });
  }
});

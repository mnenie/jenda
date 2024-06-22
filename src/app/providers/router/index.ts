import { createRouter, createWebHistory } from 'vue-router';
import type { RouterRecord } from './types';
import { DefaultLayout, AuthLayout } from '@/layouts';
import { RouteNames } from '@/shared/config/consts';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: RouteNames.home,
        component: () => import('@/pages/HomePage.vue')
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
        component: () => import('@/pages/LoginPage.vue')
      },
      {
        path: 'registration',
        name: RouteNames.registration,
        component: () => import('@/pages/RegistrationPage.vue')
      }
    ]
  }
] satisfies readonly RouterRecord[];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

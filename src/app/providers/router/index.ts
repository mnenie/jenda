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
    name: RouteNames.templates,
    path: '/templates',
    component: () => import('@/pages/Templates.vue'),
    meta: {
      layout: SidebarLayout,
      requiresAuth: true
    }
  },
  {
    name: RouteNames.settings,
    path: '/settings',
    component: () => import('@/pages/Settings.vue'),
    meta: {
      layout: SidebarLayout,
      requiresAuth: true
    }
  },
  {
    name: RouteNames.members,
    path: '/members',
    component: () => import('@/pages/members/MembersOverview.vue'),
    redirect: { name: RouteNames.members + '.all' },
    children: [
      {
        name: RouteNames.members + '.all',
        path: '',
        component: () => import('@/pages/members/AllParticipants.vue')
      },
      {
        name: RouteNames.members + '.guests',
        path: 'guests',
        component: () => import('@/pages/members/Guests.vue')
      }
    ],
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
  // TODO(@mnenie): Add guards logic
  // Needs to add guard auth logic in router
});

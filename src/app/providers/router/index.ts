import { createRouter, createWebHistory } from 'vue-router';
import type { RouterRecord } from './types';
import { RouteNames } from '@/shared/config/consts';
import { LayoutsEnum } from '@/layouts/model';
import { layoutResolverMiddleware } from './middleware';

const routes = [
  {
    name: RouteNames.boards,
    path: '/',
    component: () => import('@/pages/Boards.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: RouteNames.templates,
    path: '/templates',
    component: () => import('@/pages/Templates.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: RouteNames.settings,
    path: '/settings',
    component: () => import('@/pages/Settings.vue'),
    meta: {
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
      requiresAuth: true
    }
  },
  {
    name: RouteNames.board,
    path: '/board/:id',
    component: () => import('@/pages/Kanban.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: RouteNames.login,
    path: '/user/login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      layout: LayoutsEnum.auth,
      requiresAuth: false
    }
  },
  {
    name: RouteNames.registration,
    path: '/user/registration',
    component: () => import('@/pages/Registration.vue'),
    meta: {
      layout: LayoutsEnum.auth,
      requiresAuth: false
    }
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/404.vue'),
    meta: {
      layout: LayoutsEnum.auth,
      requiresAuth: true
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
  if (to.meta.requiresAuth === true) {
    return router.push({ name: RouteNames.login });
  }
});

router.beforeEach(layoutResolverMiddleware);

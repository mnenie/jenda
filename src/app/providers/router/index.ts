import { createRouter, createWebHistory } from 'vue-router';
import type { RouterRecord } from './types';
import { RouteNames } from '@/shared/config/consts';
import { LayoutsEnum } from '@/layouts/model';
import { layoutResolverMiddleware } from './middleware';

const routes = [
  {
    name: RouteNames.welcome,
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      layout: LayoutsEnum.welcome,
      requiresAuth: false
    }
  },
  {
    name: RouteNames.boards,
    path: '/boards',
    component: () => import('@/pages/BoardsPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: RouteNames.templates,
    path: '/templates',
    component: () => import('@/pages/TemplatesPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: RouteNames.settings,
    path: '/settings',
    component: () => import('@/pages/SettingsPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: RouteNames.members,
    path: '/members',
    component: () => import('@/pages/MembersPage.vue'),
    redirect: { name: RouteNames.members + '.all' },
    children: [
      {
        name: RouteNames.members + '.all',
        path: '',
        component: () => import('@/pages/MainTeamPage.vue')
      },
      {
        name: RouteNames.members + '.guests',
        path: 'guests',
        component: () => import('@/pages/GuestsPage.vue')
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    name: RouteNames.board,
    path: '/board/:id',
    component: () => import('@/pages/KanbanPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: RouteNames.login,
    path: '/user/sign-in',
    component: () => import('@/pages/LoginPage.vue'),
    meta: {
      layout: LayoutsEnum.auth,
      requiresAuth: false
    }
  },
  {
    name: RouteNames.registration,
    path: '/user/sign-up',
    component: () => import('@/pages/RegistrationPage.vue'),
    meta: {
      layout: LayoutsEnum.auth,
      requiresAuth: false
    }
  },
  {
    name: RouteNames.error,
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: {
      layout: LayoutsEnum.auth,
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
  // if (to.meta.requiresAuth === true) {
  //   return router.push({ name: RouteNames.login });
  // }
});

router.beforeEach(layoutResolverMiddleware);

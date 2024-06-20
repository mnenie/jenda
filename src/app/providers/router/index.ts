import { createRouter, createWebHistory } from 'vue-router';
import type { RouterRecord } from './types';

const routes = [] satisfies readonly RouterRecord[]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

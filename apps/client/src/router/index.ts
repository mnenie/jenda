import { createRouter, createWebHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import { layoutResolverGuard } from './guards'

export const router = createRouter({
  history: createWebHistory(),
  // resolved: https://github.com/mnenie/jenda/issues/56
  routes,
})

router.beforeEach((to, from) => {
  // Needs to add guard auth logic in router
  if (to.meta.requiresAuth === true) {
    return router.push({ name: 'sign-in' })
  }
})

router.beforeEach(layoutResolverGuard)

if (import.meta.hot) {
  handleHotUpdate(router)
}

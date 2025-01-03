import { createRouter, createWebHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import { layoutResolverMiddleware } from './middleware'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // resolved: https://github.com/mnenie/jenda/issues/56
  routes,
})

router.beforeEach((to, from) => {
  // Needs to add guard auth logic in router
  if (to.meta.requiresAuth === true) {
    return router.push({ name: 'sign-in' })
  }
})

router.beforeEach(layoutResolverMiddleware)

if (import.meta.hot) {
  handleHotUpdate(router)
}

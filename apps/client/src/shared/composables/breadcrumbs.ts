import { effectScope, onScopeDispose, shallowRef, watch } from 'vue'
import { type RouteLocationRaw, useRoute } from 'vue-router/auto'

export interface Breadcrumb {
  name: string
  tKey?: string
  value?: string
  icon?: string
  to: RouteLocationRaw
}

export function useBreadcrumbs<T extends Breadcrumb>() {
  const breadcrumbs = shallowRef<T[]>([])
  const route = useRoute()

  const scope = effectScope()

  // scope.run(() => {
  watch(
    () => route.name,
    () => {
      breadcrumbs.value = route.meta.breadcrumb as T[]
    },
    { immediate: true },
  )
  // })
  onScopeDispose(() => {
    scope.stop()
  })

  return {
    breadcrumbs,
  }
}

import { shallowRef, watch } from 'vue'
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

  watch(
    () => route.name,
    () => {
      breadcrumbs.value = route.meta.breadcrumb as T[]
    },
    { immediate: true },
  )

  return {
    breadcrumbs,
  }
}

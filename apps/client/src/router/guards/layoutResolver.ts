import type { RouteLocationNormalized } from 'vue-router/auto'
import { LayoutToFileMap } from '@/core/constants/layouts'
import { LayoutsEnum } from '@/shared/constants/layouts'

export async function layoutResolverGuard(route: RouteLocationNormalized) {
  const { layout } = route.meta
  const normalizedLayoutName = layout as LayoutsEnum || LayoutsEnum.default
  const fileName = LayoutToFileMap[normalizedLayoutName].split('.vue')[0]
  const component = await import(`@/core/layouts/${fileName}.vue`)
  route.meta.layoutComponent = component.default
}

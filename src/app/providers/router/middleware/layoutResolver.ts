import type { RouteLocationNormalized } from 'vue-router';
import { LayoutsEnum, LayoutToFileMap } from '@/layouts/model';

export async function layoutResolverMiddleware(route: RouteLocationNormalized) {
  const { layout } = route.meta;
  const normalizedLayoutName = layout || LayoutsEnum.default;
  const fileName = LayoutToFileMap[normalizedLayoutName].split('.vue')[0];
  const component = await import(`@/layouts/ui/${fileName}.vue`);
  route.meta.layoutComponent = component.default;
}

import type { LayoutsEnum } from '@/shared/constants/layouts'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: LayoutsEnum
    requiresAuth?: boolean
  }
}

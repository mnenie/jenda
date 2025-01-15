import type { RouteRecordRaw } from 'vue-router'
import type { LayoutsEnum } from '@/shared/constants/layouts'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: LayoutsEnum
    requiresAuth?: boolean
  }
}

export type RouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string
  children?: RouterRecord[]
}

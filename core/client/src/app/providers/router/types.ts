import type { LayoutsEnum } from '@/layouts/model'
import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: LayoutsEnum
    layoutComponent?: Component
    requiresAuth?: boolean
  }
}

export type RouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string
  children?: RouterRecord[]
}

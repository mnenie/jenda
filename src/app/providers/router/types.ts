import 'vue-router';
import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import type { LayoutsEnum } from '@/layouts/model';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: LayoutsEnum;
    layoutComponent?: Component;
    requiresAuth?: boolean;
  }
}

export type RouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string;
  children?: RouterRecord[];
};

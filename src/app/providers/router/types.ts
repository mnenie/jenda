import 'vue-router';
import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    layout: Component;
    requiresAuth?: boolean;
  }
}

export type RouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string;
  children?: RouterRecord[];
};

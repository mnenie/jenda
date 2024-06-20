import type { RouteRecordRaw } from 'vue-router';

export type RouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string;
  children?: RouterRecord[];
};

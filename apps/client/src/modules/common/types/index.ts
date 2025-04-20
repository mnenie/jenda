import type  { IconifyIcon } from '@iconify/vue';

export interface DateParams<D extends Date | string | number = string> {
  createdAt?: D;
  updatedAt?: D;
  deletedAt?: D | null;
}

export interface DdBasicMenuItem {
  prefix: string;
  icon: string | IconifyIcon;
}

import type { IconifyIcon } from '@iconify/vue'

export interface Link {
  id: number
  name: string
  pathName: string
  // string with unocss update
  icon: IconifyIcon | string
}

export interface HeaderNavLink {
  id: number
  name: string
  pagePrefix: string
}

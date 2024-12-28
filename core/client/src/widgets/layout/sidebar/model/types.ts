import type { IconifyIcon } from '@iconify/vue'
import type { RouterLinkProps } from 'vue-router/auto'

export interface Link {
  id: number
  name: string
  pathName: RouterLinkProps['to']
  // string with unocss update
  icon: IconifyIcon | string
}

export interface IntegrationItem {
  name: string
  link: string
  icon: string
}
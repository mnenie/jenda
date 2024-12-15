import type { IconifyIcon } from '@iconify/vue'
import type { RouterLinkProps } from 'vue-router'

export interface SectionItem {
  title?: string
  description?: string
  icon: string
  urlPrefix:
    | 'kanban'
    | 'about'
    | 'collaborative'
    | 'activity'
    | 'members'
    | 'chats'
}

export interface MenuLink {
  title?: string
  url: string
}

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

export interface HeaderNavLink {
  id: number
  name: string
  pagePrefix: string
}

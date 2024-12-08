import type { HeaderNavLink, MenuLink, SectionItem } from '../types'

export const headerLinks: HeaderNavLink[] = [
  { id: 0, name: 'About', pagePrefix: 'about' },
  { id: 1, name: 'Kanban', pagePrefix: 'kanban' },
  { id: 2, name: 'Collaborative', pagePrefix: 'collaborative' },
  { id: 3, name: 'Activity', pagePrefix: 'activity' },
  { id: 4, name: 'Members', pagePrefix: 'members' },
  { id: 5, name: 'Chats', pagePrefix: 'chats' },
]

export const menuLinks: MenuLink[] = [
  { url: 'https://github.com/mnenie/jenda' },
  { url: 'https://t.me/youngjuicycashrussia' },
]

export const items: SectionItem[] = [
  {
    icon: '✨',
    urlPrefix: 'about',
  },
  {
    icon: '🧑‍💻',
    urlPrefix: 'kanban',
  },
  {
    icon: '👥',
    urlPrefix: 'collaborative',
  },
  {
    icon: '🌐',
    urlPrefix: 'members',
  },
  {
    icon: '👔',
    urlPrefix: 'activity',
  },
  {
    icon: '💬',
    urlPrefix: 'activity',
  },
]

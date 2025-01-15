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

export interface HeaderNavLink {
  id: number
  name: string
  pagePrefix: string
}

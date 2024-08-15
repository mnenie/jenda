import type { HeaderNavLink } from '../types';

export const headerLinks = [
  { id: 0, name: 'About', pagePrefix: 'about' },
  { id: 1, name: 'Kanban', pagePrefix: 'kanban' },
  { id: 2, name: 'Members', pagePrefix: 'members' },
  { id: 3, name: 'Templates', pagePrefix: 'templates' },
  { id: 4, name: 'Collaborative', pagePrefix: 'collaborative' },
  { id: 5, name: 'Chats', pagePrefix: 'chats' }
] satisfies HeaderNavLink[];

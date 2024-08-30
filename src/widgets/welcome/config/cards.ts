import type { MarketingCard } from '../types';

export const cardsInfo = [
  {
    id: 0,
    pagePrefix: 'kanban',
    height: '270',
    width: '640'
  },
  {
    id: 1,
    pagePrefix: 'collaborative',
    height: '300',
    width: '640'
  },
  {
    id: 2,
    pagePrefix: 'members',
    width: '500',
    height: '420'
  },
  {
    id: 3,
    pagePrefix: 'templates',
    width: '500'
  },
  {
    id: 4,
    pagePrefix: 'chats'
  }
] satisfies MarketingCard[];

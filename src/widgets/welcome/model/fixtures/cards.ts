import { markRaw } from 'vue';
import type { MarketingCard } from '../types';

export const cardsInfo = markRaw<MarketingCard[]>([
  {
    id: 0,
    pagePrefix: 'kanban',
    height: '270',
    width: '640',
    // img
    bottom: '-260px',
    right: '-360px',
    imgWidth: '720px',
    url: '/dev-card.png'
  },
  {
    id: 1,
    pagePrefix: 'collaborative',
    height: '300',
    width: '640',
    // img
    bottom: '-160px',
    right: '20px',
    imgWidth: '600px',
    url: '/dev-card.png'
  },
  {
    id: 2,
    pagePrefix: 'members',
    width: '500',
    height: '420',
    // img
    bottom: '-230px',
    right: '-290px',
    imgWidth: '600px',
    url: '/dev-card.png'
  },
  {
    id: 3,
    pagePrefix: 'templates',
    width: '500',
    // img
    bottom: '-200px',
    right: '-500px',
    imgWidth: '700px',
    url: '/dev-card.png'
  },
  {
    id: 4,
    pagePrefix: 'chats',
    // img
    bottom: '0px',
    right: '-420px',
    imgWidth: '700px',
    url: '/dev-card.png'
  }
]);

import type { MarketingCard } from '../types'
import { shallowRef } from 'vue'

export const cardsInfo = shallowRef<MarketingCard[]>([
  {
    id: 0,
    pagePrefix: 'kanban',
    height: '270',
    width: '640',
    // img
    bottom: '-260px',
    right: '-360px',
    imgWidth: '720px',
    maxWidth: '400px',
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
    maxWidth: '360px',
  },
  {
    id: 2,
    pagePrefix: 'members',
    width: '500',
    height: '460',
    // img
    bottom: '-230px',
    right: '-290px',
    imgWidth: '600px',
    maxWidth: '240px',
  },
  {
    id: 3,
    pagePrefix: 'activity',
    width: '500',
    // img
    bottom: '-200px',
    right: '-500px',
    imgWidth: '700px',
    maxWidth: '300px',
  },
  {
    id: 4,
    pagePrefix: 'chats',
    // img
    bottom: '0px',
    right: '-420px',
    imgWidth: '700px',
    maxWidth: '300px',
  },
])

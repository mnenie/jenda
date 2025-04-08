import type { Emoji } from '../types/comment'

export const EMOJI_TYPES = {
  THUMBSUP: 'thumbsup',
  ROCKET: 'rocket',
  FIRE: 'fire',
  HANDSHAKE: 'handshake',
} as const

export const emojis = [
  {
    type: EMOJI_TYPES.THUMBSUP,
    symbol: 'noto:thumbs-up',
  },
  {
    type: EMOJI_TYPES.HANDSHAKE,
    symbol: 'noto:handshake',
  },
  {
    type: EMOJI_TYPES.ROCKET,
    symbol: 'noto:rocket',
  },
  {
    type: EMOJI_TYPES.FIRE,
    symbol: 'noto:fire',
  },
] as const satisfies Emoji[]

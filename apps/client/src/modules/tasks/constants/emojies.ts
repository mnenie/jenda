import type { Emoji } from '../types/comment'

export const EMOJI_TYPES = {
  THUMBSUP: 'thumbsup',
  ROCKET: 'rocket',
  FIRE: 'fire',
  HANDSHAKE: 'handshake',
  EYES: 'eyes',
  HUSHED: 'hushed',
  GRINNING: 'grinning',
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
    type: EMOJI_TYPES.GRINNING,
    symbol: 'noto:grinning-squinting-face',
  },
  {
    type: EMOJI_TYPES.ROCKET,
    symbol: 'noto:rocket',
  },
  {
    type: EMOJI_TYPES.FIRE,
    symbol: 'noto:fire',
  },
  {
    type: EMOJI_TYPES.HUSHED,
    symbol: 'noto:hushed-face',
  },
  {
    type: EMOJI_TYPES.EYES,
    symbol: 'noto:eyes',
  },
] as const satisfies Emoji[]

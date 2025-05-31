import type { NChooser } from '../types'

export const notificationValues = {
  internal:
    [
      { value: 'internal_notifier', sign: 'hugeicons:block-game' },
    ],
  external:
    [
      { value: 'external_vk', sign: 'basil:vk-solid' },
      { value: 'external_telegram', sign: 'hugeicons:telegram' },
      { value: 'external_discord', sign: 'qlementine-icons:discord-16' },
    ],
} as const satisfies Record<string, NChooser[]>

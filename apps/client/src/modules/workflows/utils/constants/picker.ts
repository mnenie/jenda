import type { PickerNode } from '../../types'

export const nodes: Record<string, PickerNode[]> = {
  main: [
    {
      type: 'trigger',
      data: {
        icon: 'ph:lightning',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'fluent:play-24-filled',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'fa-brands:telegram-plane',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'tabler:git-branch',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'mingcute:time-duration-line',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'tabler:math',
      },
    },
  ],
  effects: [
    {
      type: 'common',
      data: {
        icon: 'tabler:confetti',
      },
    },
  ],
}

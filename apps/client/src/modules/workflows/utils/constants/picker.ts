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
      type: 'default',
      data: {
        icon: 'fluent:play-24-filled',
      },
    },
    {
      type: 'default',
      data: {
        icon: 'fa-brands:telegram-plane',
      },
    },
    {
      type: 'default',
      data: {
        icon: 'tabler:git-branch',
      },
    },
    {
      type: 'default',
      data: {
        icon: 'mingcute:time-duration-line',
      },
    },
    {
      type: 'default',
      data: {
        icon: 'tabler:math',
      },
    },
  ],
  effects: [
    {
      type: 'default',
      data: {
        icon: 'tabler:confetti',
      },
    },
  ],
}

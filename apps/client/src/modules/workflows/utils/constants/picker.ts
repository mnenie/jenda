import type { PickerNode } from '../../types'

export const nodes: Record<string, PickerNode[]> = {
  main: [
    {
      type: 'trigger',
      data: {
        icon: 'ph:lightning',
        tag: 'trigger',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'fluent:play-24-filled',
        tag: 'action',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'fa-brands:telegram-plane',
        tag: 'notification',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'tabler:git-branch',
        tag: 'condition',
      },
    },
    {
      type: 'common',
      data: {
        icon: 'mingcute:time-duration-line',
        tag: 'delay',
      },
    },
  ],
  effects: [
    {
      type: 'common',
      data: {
        icon: 'tabler:confetti',
        tag: 'confetti',
      },
    },
  ],
}

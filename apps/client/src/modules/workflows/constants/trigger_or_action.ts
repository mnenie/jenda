import type { Chooser } from '../types'

export const values = {
  columns:
    [
      { value: 'column_create', sign: 'ci:add-column' },
      { value: 'column_update', sign: 'fluent:column-arrow-right-20-regular' },
      { value: 'column_task_create', sign: 'fluent:text-arrow-down-right-column-16-regular' },
      { value: 'column_delete', sign: 'ci:delete-column' },
    ],
  tasks:
    [
      { value: 'task_create', sign: 'hugeicons:layer-add' },
      { value: 'task_update', sign: 'hugeicons:time-quarter-02' },
    ],
  users: [
    { value: 'user_add', sign: 'hugeicons:user-add-01' },
    { value: 'you_online', sign: 'hugeicons:wifi-connected-02' },
  ],
} as const satisfies Record<string, Chooser[]>

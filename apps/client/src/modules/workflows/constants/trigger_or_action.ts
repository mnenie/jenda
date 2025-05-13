import type { TAChooser } from '../types'

export const triggerValues = {
  columns:
    [
      { value: 'column_created', sign: 'ci:add-column' },
      { value: 'column_updated', sign: 'fluent:column-arrow-right-20-regular' },
      { value: 'column_deleted', sign: 'ci:delete-column' },
    ],
  tasks:
    [
      { value: 'task_updated', sign: 'hugeicons:time-quarter-02' },
      { value: 'column_task_created', sign: 'fluent:text-arrow-down-right-column-16-regular' },
    ],
  users: [
    { value: 'user_add', sign: 'hugeicons:user-add-01' },
    { value: 'you_online', sign: 'hugeicons:wifi-connected-02' },
  ],
} as const satisfies Record<string, TAChooser[]>

export const actionValues = {
  columns:
    [
      { value: 'column_create', sign: 'ci:add-column' },
      { value: 'column_update', sign: 'fluent:column-arrow-right-20-regular' },
      { value: 'column_delete', sign: 'ci:delete-column' },
    ],
  tasks:
    [
      { value: 'task_update', sign: 'hugeicons:time-quarter-02' },
      { value: 'column_task_create', sign: 'fluent:text-arrow-down-right-column-16-regular' },
    ],
} as const satisfies Record<string, TAChooser[]>

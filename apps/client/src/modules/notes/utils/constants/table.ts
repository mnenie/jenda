export const columns = [
  {
    accessorKey: 'title',
    meta: {
      icon: 'hugeicons:alpha',
      _tableCell: 'max-w-180px',
    },
  },
  {
    accessorKey: 'content',
    meta: {
      icon: 'hugeicons:align-box-bottom-left',
      _tableCell: 'max-w-220px text-neutral-600 dark:text-neutral-300',
    },
  },
  {
    accessorKey: 'creator',
    meta: {
      icon: 'hugeicons:user',
    },
  },
  {
    accessorKey: 'users',
    meta: {
      icon: 'hugeicons:user-group',
      _tableCell: 'min-w-120px',
    },
  },
  {
    accessorKey: 'date',
    meta: {
      icon: 'hugeicons:calendar-02',
      _tableCell: 'text-left',
    },
  },
]

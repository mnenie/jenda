export const columns = [
  {
    accessorKey: 'name',
    meta: {
      icon: 'hugeicons:alpha',
      _tableCell: 'max-w-220px',
    },
  },
  {
    accessorKey: 'labels',
    meta: {
      icon: 'hugeicons:creative-market',
      badge: 'Optional',
      _tableCell: 'max-w-220px',
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
    accessorKey: 'tasks',
    meta: {
      icon: 'hugeicons:workflow-circle-06',
      _tableCell: 'text-left',
    },
  },
  {
    accessorKey: 'estimate',
    meta: {
      icon: 'hugeicons:bulb-charging',
      badge: 'AI',
      _tableCell: 'text-left bg-purple-50/50 dark:bg-purple-900/20',
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

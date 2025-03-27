import { ref } from 'vue'

interface ColumnMenuItem {
  prefix: string
  icon: string
}

export const columnMenuItems = ref<ColumnMenuItem[]>([
  {
    prefix: 'edit',
    icon: 'bytesize:edit',
  },
  {
    prefix: 'limit',
    icon: 'tabler:numbers',
  },
  {
    prefix: 'delete',
    icon: 'hugeicons:delete-03',
  },
])

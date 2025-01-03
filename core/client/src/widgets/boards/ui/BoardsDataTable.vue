<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import type { Table } from '@tanstack/vue-table'
import { DataTable, UiBadge } from '@/shared/ui'
import { UserAvatar } from '@/entities/user'

defineProps<{
  data: any
}>()

const columns = [
  {
    header: 'Название канбана',
    accessorKey: 'name',
    meta: {
      icon: 'hugeicons:alpha',
      _tableCell: 'max-w-220px',
    },
  },
  {
    header: 'Статус',
    accessorKey: 'status',
    meta: {
      icon: 'hugeicons:energy',
      _tableCell: 'text-left',
    },
  },
  {
    header: 'Лэйблы',
    accessorKey: 'labels',
    meta: {
      icon: 'hugeicons:creative-market',
      badge: 'Optional',
      _tableCell: 'max-w-220px',
    },
  },
  {
    header: 'Участники',
    accessorKey: 'users',
    meta: {
      icon: 'hugeicons:user-group',
      _tableCell: 'min-w-120px',
    },
  },
  {
    header: 'Задачи',
    accessorKey: 'tasks',
    meta: {
      icon: 'hugeicons:workflow-circle-06',
      _tableCell: 'text-left',
    },
  },
  {
    header: 'Оценка',
    accessorKey: 'estimate',
    meta: {
      icon: 'hugeicons:bulb-charging',
      badge: 'AI',
      _tableCell: 'text-left bg-purple-50/50',
    },
  },
  {
    header: 'Дата создания',
    accessorKey: 'date',
    meta: {
      icon: 'hugeicons:calendar-02',
      _tableCell: 'text-left',
      _tableHead: 'w-144px',
    },
  },
]
const select = ref()

const table = useTemplateRef<Table<any>>('table')

const visibleUsers = computed(() => (cell: any) => cell.row.original.users.slice(0, 4))

const remainingUsers = computed(() => (cell: any) => Math.max(cell.row.original.users.length - 4, 0))

function userPosition(idx: number) {
  return idx * 20
}

defineExpose({
  getTable: () => table.value,
})
</script>

<template>
  <DataTable
    ref="table"
    v-model="select"
    :columns
    :data
    enable-row-selection
    enable-column-filters
    enable-sorting
  >
    <template #labels-cell="{ cell }">
      <div class="w-full overflow-hidden text-ellipsis whitespace-nowrap text-neutral-500">
        <UiBadge
          v-for="{ name, color } in cell.row.original.labels"
          :key="name"
          variant="soft"
          class="shadow-none rounded-lg px-1.5 mr-1.5"
          :class="color"
        >
          {{ name }}
        </UiBadge>
      </div>
    </template>
    <template #status-cell="{ cell }">
      <span
        class="text-sm"
        :class="cell.row.original.status === 'archived' ? 'text-neutral-600' : 'text-green-600'"
      > {{ cell.row.original.status }}</span>
    </template>
    <template #users-cell="{ cell }">
      <div v-if="visibleUsers(cell).length > 0" class="flex items-center relative h-full w-full justify-between">
        <div class="relative flex items-center relative h-full">
          <template v-for="(user, idx) in visibleUsers(cell)" :key="user">
            <UserAvatar
              :style="{
                left: `${userPosition(idx)}px`,
                zIndex: `${idx + 1}`,
              }"
              class="!h-24px !w-24px absolute"
            >
              <img :src="user.photoUrl" class="object-cover" />
            </UserAvatar>
          </template>
        </div>
        <div
          v-if="remainingUsers(cell) > 0"
          :style="{
            zIndex: `${visibleUsers(cell).length + 1}`,
          }"
          class="flex items-center justify-center text-sm text-neutral-600 dark:text-neutral-400"
        >
          +{{ remainingUsers(cell) }}
        </div>
      </div>
      <span v-else class="text-neutral-500">-</span>
    </template>
  </DataTable>
</template>

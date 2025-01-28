<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDark } from '@vueuse/core'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import type { Table } from '@tanstack/vue-table'
import type { BoardRow } from '../types'
import { DataTable, UiBadge } from '@/shared/ui'
import { formatLabelColor } from '@/shared/helpers/helperColor'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'

defineProps<{
  data: Set<BoardRow> | BoardRow[]
}>()

const _columns = [
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

const { tm, t } = useI18n()

const localizedArr = tm('boards.columns') as any

const columns = computed(() => {
  return _columns.map((column, idx) => ({
    ...column,
    header: localizedArr[idx],
  }))
})

const select = defineModel <Record<string, boolean>>('select')

const table = useTemplateRef<Table<any>>('table')

const visibleUsers = computed(() => (cell: any) => cell.row.original.users.slice(0, 4))

const remainingUsers = computed(() => (cell: any) => Math.max(cell.row.original.users.length - 4, 0))

function userPosition(idx: number) {
  return idx * 20
}

dayjs.extend(localizedFormat)
// mocks -> after from store

const timesAgo = computed(() =>
  (board: BoardRow) => {
    return dayjs(board.createdAt).format('ll')
  })

const isDark = useDark()

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
      <div class="w-full whitespace-nowrap text-neutral-500">
        <template v-if="cell.row.original.labels.length > 0">
          <UiBadge
            v-for="{ name, color } in cell.row.original.labels"
            :key="name"
            variant="soft"
            class="shadow-none rounded-lg !text-12px 2xl:!text-xs font-medium px-1.5 mr-1.5 bg-neutral-100 text-neutral-800 dark:(bg-neutral-700/80 text-neutral-100)"
            :style="{
              background: color ? color.startsWith('#') ? `${color}33` : color : '',
              color: formatLabelColor(color, isDark ? 10 : 100) || '',
              border: color ? `1px solid ${color}44 !important` : '1px solid rgba(128, 128, 128, 0.3) !important',
            }"
          >
            {{ name }}
          </UiBadge>
        </template>
        <template v-else>
          <span class="text-neutral-500">-</span>
        </template>
      </div>
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
          class="flex items-center justify-center text-neutral-600 dark:text-neutral-400"
        >
          +{{ remainingUsers(cell) }}
        </div>
      </div>
      <span v-else class="text-neutral-500">-</span>
    </template>
    <template #date-cell="{ cell }">
      {{ timesAgo(cell.row.original) }}
    </template>
  </DataTable>
</template>

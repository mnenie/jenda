<script setup lang="ts">
import { computed, inject, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { columns as _columns } from '../constants/table'
import LabelItem from './additions/LabelItem.vue'
import type { Table } from '@tanstack/vue-table'
import type { BoardRow } from '../types'
import { DataTable } from '@/shared/ui'
import { DayjsInjectionKey } from '@/plugins/dayjs'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'

defineProps<{
  data: Set<BoardRow> | BoardRow[]
}>()

const select = defineModel <Record<string, boolean>>('select')

const table = useTemplateRef<Table<any>>('table')

const { tm } = useI18n()

const localizedArr = tm('boards.columns') as any

const columns = computed(() => {
  return _columns.map((column, idx) => ({
    ...column,
    header: localizedArr[idx],
  }))
})

const dayjs = inject(DayjsInjectionKey)!

const createdAt = computed(() =>
  (board: BoardRow) => {
    return dayjs(board.createdAt).format('ll')
  })

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
          <LabelItem v-for="label in cell.row.original.labels" :key="label.name" :label="label" class="mr-1.5 py-px px-1.5 !text-12px" />
        </template>
        <template v-else>
          <span class="text-neutral-500">-</span>
        </template>
      </div>
    </template>
    <template #users-cell="{ cell }">
      <UserAvatars v-if="cell.row.original.users.length > 0" avatar="!w-24px !h-24px" :users="cell.row.original.users" :max="5" />
      <span v-else class="text-neutral-500">-</span>
    </template>
    <template #date-cell="{ cell }">
      {{ createdAt(cell.row.original) }}
    </template>
  </DataTable>
</template>

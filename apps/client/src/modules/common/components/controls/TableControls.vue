<script setup lang="ts" generic="TData">
import PaginationItems from '../PaginationItems.vue'
import ChooseRowsCount from '../ChooseRowsCount.vue'
import type { Table } from '@tanstack/vue-table'

defineProps<{
  table?: Table<TData>
}>()
</script>

<template>
  <div
    class="flex items-center justify-between px-2"
  >
    <div
      class="flex-1 text-sm text-neutral-600 dark:text-neutral-400"
    >
      {{ table?.getFilteredSelectedRowModel().rows.length }}
      {{ $t('table.row_from_all') }}
      {{ table?.getFilteredRowModel().rows.length }}
      {{ $t('table.row_selected') }}
    </div>
    <div class="flex items-center gap-4">
      <span
        class="flex items-center justify-center text-sm"
      >
        {{ $t('table.rows_on_page') }}
      </span>
      <ChooseRowsCount
        :table="table"
        :model-value="`${table?.getState().pagination.pageSize}`"
        @update:model-value="table?.setPageSize($event as unknown as number)"
      />
      <div
        class="flex items-center justify-center text-sm"
      >
        {{ $t('table.page') }}
        {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }}
        {{ $t('table.row_from_all') }}
        {{ table?.getPageCount().toLocaleString() }}
      </div>
      <PaginationItems :table="table" />
    </div>
  </div>
</template>

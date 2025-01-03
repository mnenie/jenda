<script setup lang="ts" generic="TData">
import PaginationItems from './PaginationItems.vue'
import type { Table } from '@tanstack/vue-table'
import { ChooseRowsCount } from '@/features/controls'

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
      {{ table?.getFilteredSelectedRowModel().rows.length }} из
      {{ table?.getFilteredRowModel().rows.length }} строк выбрано(а).
    </div>
    <div class="flex items-center gap-4">
      <span
        class="flex items-center justify-center text-sm font-medium"
      >
        Строк на странице
      </span>
      <ChooseRowsCount
        :table="table"
        :model-value="`${table?.getState().pagination.pageSize}`"
        @update:model-value="table?.setPageSize($event as unknown as number)"
      />
      <div
        class="flex items-center justify-center text-sm font-medium"
      >
        Страница {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} из
        {{ table?.getPageCount().toLocaleString() }}
      </div>
      <PaginationItems :table="table" />
    </div>
  </div>
</template>

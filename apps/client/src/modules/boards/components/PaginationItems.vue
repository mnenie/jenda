<script setup lang="ts" generic="TData">
import type { Table } from '@tanstack/vue-table'
import {
  UiPagination,
  UiPaginationFirst,
  UiPaginationLast,
  UiPaginationList,
  UiPaginationNext,
  UiPaginationPrev,
} from '@/shared/ui'

defineProps<{
  table?: Table<TData>
}>()
</script>

<template>
  <UiPagination :total="table?.getFilteredRowModel().rows.length">
    <UiPaginationList class="flex items-center gap-1">
      <UiPaginationFirst
        :disabled="!table?.getCanPreviousPage()"
        @click="table?.setPageIndex(0)"
      />
      <UiPaginationPrev
        :disabled="!table?.getCanPreviousPage()"
        @click="table?.previousPage()"
      />
      <UiPaginationNext
        :disabled="!table?.getCanNextPage()"
        @click="table?.nextPage()"
      />
      <UiPaginationLast
        :disabled="!table?.getCanNextPage()"
        @click="table?.setPageIndex(table.getPageCount() - 1)"
      />
    </UiPaginationList>
  </UiPagination>
</template>

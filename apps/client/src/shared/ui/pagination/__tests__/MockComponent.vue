<script setup lang="ts">
import { useEmitAsProps } from 'radix-vue'
import {
  UiPagination,
  UiPaginationFirst,
  UiPaginationLast,
  UiPaginationList,
  UiPaginationNext,
  UiPaginationPrev,
} from '..'
import type { PaginationRootEmits, PaginationRootProps } from 'radix-vue'

const { total = 10, ...props } = defineProps<PaginationRootProps>()
const emits = defineEmits<PaginationRootEmits>()
</script>

<template>
  <UiPagination
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
    :total="total"
  >
    <UiPaginationList class="flex items-center gap-1">
      <UiPaginationFirst />
      <UiPaginationPrev />
      <UiPaginationNext />
      <UiPaginationLast />
    </UiPaginationList>
  </UiPagination>
</template>

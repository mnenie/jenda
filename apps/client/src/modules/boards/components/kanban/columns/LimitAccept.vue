<script setup lang="ts">
import { computed } from 'vue'
import type { BoardCard, Column } from '../../../types'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  column: Column
  cards: BoardCard[]
}>()

const acceptColor = computed(() => {
  if (props.column.limit && props.cards.length >= props.column.limit)
    return '!text-red-400 dark:!text-red-500'
  return ''
})
</script>

<template>
  <div :class="cn('ml-0.5 flex items-center gap-1 text-neutral-500 dark:text-neutral-400', acceptColor)">
    <div v-if="column.limit" class="flex items-center gap-px">
      <span>{{ cards.length }}</span>
      <span>/</span>
      <span>{{ column.limit }}</span>
    </div>
    <span v-else class="text-neutral-500 dark:text-neutral-400">{{ cards.length }}</span>
  </div>
</template>

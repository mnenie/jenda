<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { BoardsAdvancedFilter, BoardsSort } from '@/features/filters'
import { AddBoard } from '@/features/boards'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'boards',
})

useHead({
  title: 'Jenda - cloud program for project and task management',
})
</script>

<template>
  <div class="w-full h-full">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <BoardsSort />
        <BoardsAdvancedFilter />
      </div>
      <AddBoard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AddBoard, RemoveBoard } from '@/features/boards/handlers'
import { BoardsAdvancedFilter, BoardsSort, SearchBoards } from '@/features/filters/boards'
import { UiTabsList, UiTabsTrigger } from '@/shared/ui'
import { useBoardsStore } from '@/entities/board'

defineProps<{
  isSelected: boolean
  idxs: string[]
}>()

const boardsStore = useBoardsStore()
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <UiTabsList>
        <UiTabsTrigger value="table">
          <span i-hugeicons-layout-table-02 />
        </UiTabsTrigger>
        <UiTabsTrigger disabled value="cards">
          <span i-hugeicons-dashboard-square-01 />
        </UiTabsTrigger>
      </UiTabsList>
      <BoardsSort class="mr-2" />
      <BoardsAdvancedFilter />
      <RemoveBoard
        v-if="isSelected"
        @remove="boardsStore.removeBoards(idxs)"
      />
    </div>
    <div class="flex items-center gap-2">
      <SearchBoards />
      <AddBoard :plural="1" variant="solid" />
    </div>
  </div>
</template>

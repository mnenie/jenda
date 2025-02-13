<script setup lang="ts">
import { useBoardsStore } from '../stores/boards'
import CreateNewBoard from './table-actions/CreateNewBoard.vue'
import RemoveSelectedBoard from './table-actions/RemoveSelectedBoard.vue'
import BoardsAdvancedFilter from './table-actions/filters/BoardsAdvancedFilter.vue'
import BoardsSort from './table-actions/filters/BoardsSort.vue'
import SearchBoards from './table-actions/filters/SearchBoards.vue'
import type { Board } from '../types'
import { UiTabsList, UiTabsTrigger } from '@/shared/ui'

defineProps<{
  isSelected: boolean
  idxs: string[]
  boards: Board[]
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
        <UiTabsTrigger value="cards">
          <span i-hugeicons-dashboard-square-01 />
        </UiTabsTrigger>
      </UiTabsList>
      <BoardsSort class="mr-2" />
      <BoardsAdvancedFilter />
      <RemoveSelectedBoard
        v-if="isSelected && boards.length > 0"
        @remove="boardsStore.removeBoards(idxs)"
      />
    </div>
    <div class="flex items-center gap-2">
      <SearchBoards />
      <CreateNewBoard
        :plural="1"
        variant="solid"
      />
    </div>
  </div>
</template>

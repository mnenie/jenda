<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../stores/board'
import CreateNewBoard from './features/CreateNewBoard.vue'
import RemoveBoard from './features/handlers/RemoveBoard.vue'
import BoardsAdvancedFilter from './filters/BoardsAdvancedFilter.vue'
import BoardsSort from './filters/BoardsSort.vue'
import SearchBoards from './filters/SearchBoards.vue'
import { UiTabsList, UiTabsTrigger } from '@/shared/ui'

defineProps<{
  isSelected: boolean
  idxs: string[]
}>()

const boardsStore = useBoardsStore()
const { boards } = storeToRefs(boardsStore)
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
      <RemoveBoard
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

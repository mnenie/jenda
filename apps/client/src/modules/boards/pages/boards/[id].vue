<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ActionsPanel from '../../components/kanban/ActionsPanel.vue'
import ArchivedAlert from '../../components/kanban/ArchivedAlert.vue'
import EmptyColumns from '../../components/kanban/columns/EmptyColumns.vue'
import { useBoardsStore } from '../../stores/boards'
import DnDKanbanContainer from '../../components/kanban/DnDKanbanContainer.vue'

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

// unplugin
definePage({
  alias: ['/n/:id'],
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'boards',
        icon: 'hugeicons:trello',
        name: 'boards',
        to: { name: 'boards' },
      },
      // mock
      {
        name: 'boards-id',
        value: 'board 1',
        to: { name: 'boards-id', params: { id: '1' } },
      },
    ],
  },
  name: 'boards-id',
})
</script>

<template>
  <div class="h-full w-full">
    <div class="relative h-full w-full p-3.5 px-15px">
      <ActionsPanel />
      <div v-if="board.columns?.length" class="h-full w-full overflow-x-auto flex items-start gap-3 overflow-y-hidden py-4">
        <DnDKanbanContainer :columns="board.columns" />
      </div>
      <EmptyColumns v-else />
      <ArchivedAlert />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ActionsPanel from '../../components/kanban/ActionsPanel.vue'
import ArchivedAlert from '../../components/kanban/ArchivedAlert.vue'
import ColumnItem from '../../components/kanban/ColumnItem.vue'
import EmptyColumns from '../../components/kanban/EmptyColumns.vue'
import { useBoardsStore } from '../../stores/boards'

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

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)
</script>

<template>
  <div class="h-full w-full">
    <div class="relative h-full w-full p-3.5 px-15px">
      <ActionsPanel />
      <div v-if="board.columns?.length" class="h-full w-full overflow-x-auto flex items-start gap-3 overflow-y-hidden py-4">
        <ColumnItem v-for="column in board.columns" :key="column._id" :column="column" />
      </div>
      <EmptyColumns v-else />
      <ArchivedAlert />
    </div>
  </div>
</template>

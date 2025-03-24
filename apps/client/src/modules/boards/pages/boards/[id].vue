<script setup lang="ts">
import { computed, shallowRef, watch } from 'vue'
import { storeToRefs } from 'pinia'
import ActionsPanel from '../../components/board-shell/ActionsPanel.vue'
import ArchivedAlert from '../../components/board-shell/ArchivedAlert.vue'
import EmptyColumns from '../../components/kanban/columns/EmptyColumns.vue'
import { useBoardsStore } from '../../stores/boards'
import DnDKanbanContainer from '../../components/kanban/DnDKanbanContainer.vue'
import AddNewColumn from '../../components/kanban/columns/AddNewColumn.vue'
import BoardImages from '../../components/board-shell/BoardImages.vue'
import { provideBoardMenuContext } from '../../composables/menu'
import { cn } from '@/shared/libs/shadcn/utils'

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const isReadonly = computed(() => board.value.status === 'archived')

const boardImage = computed(() => board.value.image ? `url(${board.value.image})` : '')

const imagesPopover = shallowRef(false)
const isBoardMenuOpen = shallowRef(false)

function closeMenu() {
  isBoardMenuOpen.value = false
}

watch(() => board.value.status, (status) => {
  if (status === 'archived') {
    imagesPopover.value = false
  }
})

provideBoardMenuContext({
  closeMenu,
  imagesPopover,
  isBoardMenuOpen,
})

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
  <div
    class="relative h-dvh w-full bg-cover bg-bottom bg-no-repeat"
    :style="{ backgroundImage: boardImage }"
  >
    <div class="relative h-full w-full p-3.5 px-15px">
      <ActionsPanel />
      <div
        v-if="board.columns?.length"
        :class="cn(
          'w-full h-full overflow-x-auto flex items-start justify-start gap-3 overflow-y-hidden py-4',
          { 'opacity-50 cursor-not-allowed': board.status === 'archived' },
        )"
      >
        <DnDKanbanContainer :columns="board.columns" :is-readonly />
        <AddNewColumn :is-readonly />
      </div>
      <EmptyColumns v-else />
    </div>
    <ArchivedAlert />
    <BoardImages />
  </div>
</template>

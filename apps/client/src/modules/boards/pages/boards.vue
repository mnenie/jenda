<script setup lang="ts" generic="TData">
import { useHead } from '@unhead/vue'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../stores/board'
import EmptyBoards from '../components/EmptyBoards.vue'
import BoardsViewManager from '../components/BoardsViewManager.vue'

// to data loaders
const boardsStore = useBoardsStore()
const { boards } = storeToRefs(boardsStore)

// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'boards',
        icon: 'hugeicons:trello',
        name: 'boards',
        to: { name: 'boards' },
      },
    ],
  },
  name: 'boards',
})

useHead({
  title: 'Jenda - cloud program for project and task management',
})
</script>

<template>
  <div v-if="$route.name !== 'boards-id'" class="w-full h-full flex flex-col">
    <BoardsViewManager />
    <EmptyBoards v-if="boards.length === 0" />
  </div>
  <RouterView />
</template>

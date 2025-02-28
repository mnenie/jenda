<script setup lang="ts">
import BoardName from '../../components/kanban/BoardName.vue'

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
    <div class="relative h-full w-full p-4 px-15px">
      <BoardName />
    </div>
  </div>
</template>

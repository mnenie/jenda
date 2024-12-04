<script setup lang="ts">
import type { Board } from '@/entities/board'
import { InfoPart, KanbanWrapper } from '@/widgets/kanban'
import { ref } from 'vue'

// mocks -> after data from backend
const board = ref<Board>({
  _id: '0',
  name: 'Startup',
  status: 'work',
  columns: [
    { _id: '0', title: 'Backlog', cards: [
      {
        _id: '0',
        title: 'Create a new project',
        priority: 'low',
        users: [],
        chat: true,
        chatCount: 2,
        tags: [{ _id: '0', name: 'test' }],
      },
    ] },
  ],
  users: [
    {
      _id: '0',
      photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
      email: 'alexpeshkov@gmail.com',
    },
  ],
})
</script>

<template>
  <div :class="$style.page_container">
    <InfoPart :board />
    <div :class="$style.kanban">
      <KanbanWrapper :columns="board.columns" />
    </div>
  </div>
</template>

<style module lang="scss">
.page_container {
  height: 100%;
  width: 100%;
}

.kanban {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

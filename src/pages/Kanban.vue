<script setup lang="ts">
import { ref } from 'vue';
import { KanbanWrapper, InfoPart } from '@/widgets/kanban';
import type { Board } from '@/entities/board';

// mocks -> after data from backend
const board = ref<Board>({
  _id: '0',
  name: 'Startup',
  status: 'work',
  columns: [],
  users: [
    {
      _id: '0',
      photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
      email: 'alexpeshkov@gmail.com'
    }
  ]
});
</script>

<template>
  <InfoPart :board />
  <div :class="$style.kanban">
    <KanbanWrapper :columns="board.columns" />
  </div>
</template>

<style module lang="scss">
.kanban {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import type { Column } from '@/entities/board';
import { DragCards, AddColumn, DragColumns } from '@/features/kanban';

// mocks -> after data from backend
const columns = ref<Column[]>([
  {
    _id: '0',
    title: 'TO DO',
    cards: [
      {
        _id: '12',
        title: 'Preparing onboarding materials for new UI designers',
        chat: false,
        users: [{ _id: '0', email: 'al', photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4' }],
        priority: 'low'
      }
    ]
  },
  {
    _id: '0',
    title: 'IN PROGRESS',
    cards: [
      {
        _id: '64',
        title: 'Preparing onboarding materials for new UI designers',
        chat: true,
        users: [{ _id: '0', email: 'al', photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4' }],
        priority: 'none'
      },
      {
        _id: '23',
        title: 'Offer notification email',
        chat: false,
        users: [
          { _id: '0', email: 'al', photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4' },
          { _id: '1', email: 'ai', photoUrl: 'https://avatars.githubusercontent.com/u/95149637?v=4' }
        ],
        priority: 'medium'
      },
      {
        _id: '8',
        title: 'Check all internal URLs',
        tags: [
          { _id: '0', name: 'dev' },
          { _id: '1', name: 'new' }
        ],
        chat: true,
        users: [{ _id: '0', email: 'al', photoUrl: 'https://avatars.githubusercontent.com/u/95149637?v=4' }],
        priority: 'none'
      }
    ]
  }
]);
</script>

<template>
  <div :class="$style.kanban_wrapper">
    <div v-if="columns">
      <DragColumns :columns="columns">
        <template #default="{ cards }">
          <DragCards :cards="cards" />
        </template>
      </DragColumns>
    </div>
    <AddColumn />
  </div>
</template>

<style module lang="scss">
.kanban_wrapper {
  padding: 15px;
  bottom: 0;
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
  position: absolute;
  right: 0;
  scrollbar-color: rgba(var(--zinc-rgb-300), 0.4) #00000026;
  scrollbar-width: auto;
  top: 0;
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 15px;
}

.flip-list-move {
  transition: transform 0.3s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.2;
}
</style>

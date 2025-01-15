<script setup lang="ts">
import { ref } from 'vue'
import type { Board } from '../../types'

// mocks -> after data from backend
const board = ref<Board>({
  _id: '0',
  name: 'Startup',
  status: 'active',
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
  labels: [],
})

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'board-id',
})
</script>

<template>
  <div class="h-full w-full">
    <div class="relative h-full w-full">
      kanban
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BoardPreview } from '@/entities/board/model'
import { FilterBoards } from '@/features/boards'
import { ref } from 'vue'

const boards = ref<BoardPreview[]>([
  {
    _id: '0',
    name: 'GTM Campaign',
    description: 'crm system development',
    users: [
      { _id: '0', email: 'al', photoUrl: 'https://www.shadcn-vue.com/avatars/02.png' },
      { _id: '1', email: 'al', photoUrl: 'https://www.shadcn-vue.com/avatars/03.png' },
      { _id: '2', email: 'al', photoUrl: 'https://www.shadcn-vue.com/avatars/05.png' },
    ],
  },
])
</script>

<template>
  <div class="w-full h-full mb-70px">
    <div class="flex flex-col h-full items-center">
      <FilterBoards />
      <div i-hugeicons-alert-square class="text-6xl text-neutral-600 my-auto" />
    </div>
  </div>
</template>

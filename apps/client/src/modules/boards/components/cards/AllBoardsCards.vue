<script setup lang="ts">
import BoardCard from './BoardCard.vue'
import type { BoardRow } from '../../types'

defineProps<{
  boards: BoardRow[]
}>()
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <BoardCard v-for="board in boards" :key="board._id" :board="board" />
  </div>
</template>

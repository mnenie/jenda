<script setup lang="ts">
import { computed } from 'vue'
import BoardCard from './BoardCard.vue'
import type { BoardRow } from '../../types'
import { useBreakpoints } from '@/shared/composables/breakpoints'

defineProps<{
  boards: BoardRow[]
}>()

const { breakpoints } = useBreakpoints()
const colsNumber = computed(() => breakpoints.smallerOrEqual('laptop').value ? 'grid-cols-4' : 'grid-cols-3')
</script>

<template>
  <div
    class="grid gap-4"
    :class="colsNumber"
  >
    <BoardCard v-for="board in boards" :key="board._id" :board="board" />
  </div>
</template>

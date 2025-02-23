<script setup lang="ts">
import { computed } from 'vue'
import type { BoardRow } from '../../types'

const props = defineProps<{
  board: BoardRow
}>()

const boardStyle = computed(() => ({
  backgroundColor: props.board.color ? `${props.board.color}33` : '#266df033',
  color: props.board.color ? props.board.color : '#266df0',
}))
</script>

<template>
  <div
    class="flex items-center justify-center w-5 h-5 rounded-sm"
    :style="boardStyle"
  >
    {{ board.name.charAt(0).toUpperCase() }}
  </div>
</template>

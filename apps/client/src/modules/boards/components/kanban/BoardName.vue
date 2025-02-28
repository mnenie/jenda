<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import { UiBadge } from '@/shared/ui'

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const boardStyle = computed(() => ({
  backgroundColor: board.value?.color ? `${board.value.color}33` : '#266df033',
  color: board.value?.color ? board.value.color : '#266df0',
}))

const statusVariant = computed(() => board.value?.status === 'active' ? 'green' : 'red')
</script>

<template>
  <div class="flex items-center space-x-2">
    <div
      v-if="board"
      class="flex items-center justify-center w-10 h-10 rounded-md text-default"
      :style="boardStyle"
    >
      {{ board.name.charAt(0).toUpperCase() }}
    </div>
    <div class="flex flex-col space-y-0">
      <UiBadge
        variant="soft"
        class="h-4 w-fit p-1 justify-start"
        :class="`badge-soft-${statusVariant}`"
      >
        {{ $t(`kanban.${board.status}`) }}
      </UiBadge>
      <div class="text-default font-semibold">
        {{ board.name }}
      </div>
    </div>
  </div>
</template>

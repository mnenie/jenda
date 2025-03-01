<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useBoardsStore } from '../../stores/boards'
import { UiButton, UiDropdownMenu, UiDropdownMenuContent, UiDropdownMenuTrigger } from '@/shared/ui'

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const boardStyle = computed(() => ({
  backgroundColor: board.value?.color ? `${board.value.color}33` : '#266df033',
  color: board.value?.color ? board.value.color : '#266df0',
}))
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="secondary" class="shadow-none">
        <div
          v-if="board"
          class="flex items-center justify-center w-6 h-6 rounded-md text-default"
          :style="boardStyle"
        >
          {{ board.name.charAt(0).toUpperCase() }}
        </div>
        <div class="text-default font-semibold">
          {{ board.name }}
        </div>
        <Icon icon="lucide:chevron-down" class="w-4 h-4 text-neutral-400" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="start">
      actions
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

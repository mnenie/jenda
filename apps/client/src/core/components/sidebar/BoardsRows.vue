<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { UiButton } from '@/shared/ui'
import { useExpandedContext } from '@/shared/composables/expanded'
import { useBoardsStore } from '@/modules/boards/stores/board'

const boardsStore = useBoardsStore()
const { boards } = storeToRefs(boardsStore)

const { isExpanded } = useExpandedContext()
</script>

<template>
  <div
    class="flex items-center justify-between w-full pt-0 pb-3"
    :class="[isExpanded ? 'px-2' : 'px-1']"
  >
    <p
      class="text-neutral-500 dark:text-neutral-400 text-small capitalize text-ellipsis
        whitespace-nowrap overflow-hidden"
    >
      {{ $t('sidebar.boards') }}
    </p>
  </div>
  <div class="flex flex-col gap-5px justify-start mb-20px">
    <UiButton
      v-for="board, idx in boards"
      :key="idx"
      variant="ghost"
      size="sm"
      class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease"
      :class="[isExpanded ? 'justify-between' : 'justify-center']"
      :style="{ padding: !isExpanded ? '0px' : '' }"
      @click="$router.push({
        name: 'boards-id',
        params: { id: board._id },
      })"
    >
      <div class="flex items-center gap-2">
        <div
          class="flex items-center justify-center w-5 h-5 rounded-sm"
          :style="{ backgroundColor: `${board.color}33`, color: board.color }"
        >
          {{ board.name.charAt(0).toUpperCase() }}
        </div>
        <span v-show="isExpanded" class="text-default !fw500 text-neutral-900 dark:text-neutral-100">
          {{ board.name }}
        </span>
      </div>
    </UiButton>
  </div>
</template>

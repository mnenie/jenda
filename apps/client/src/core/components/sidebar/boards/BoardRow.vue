<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router/auto'
import type { BoardRow } from '@/modules/boards/types'
import { useExpandedContext } from '@/shared/composables/expanded'
import { UiButton } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  board: BoardRow
}>()

const route = useRoute('boards-id')

const isBoardActive = computed(() => route.params.id === props.board._id && route.name === 'boards-id')

const boardStyle = computed(() => ({
  backgroundColor: props.board.color ? `${props.board.color}33` : '#266df033',
  color: props.board.color ? props.board.color : '#266df0',
}))

const { isExpanded } = useExpandedContext()
</script>

<template>
  <RouterLink
    v-tooltip.right="{
      content: board.name,
      triggers: ['hover'],
      disabled: isExpanded,
    }"
    :to="{
      name: 'boards-id',
      params: { id: board._id },
    }"
    class="flex items-center justify-start w-full"
  >
    <UiButton
      :variant="isBoardActive ? 'secondary' : 'ghost'"
      size="sm"
      class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease"
      :class="cn(
        [isExpanded ? 'justify-between' : 'justify-center'],
        { '!bg-neutral-200/40 dark:!bg-neutral-700/50': isBoardActive },
      )"
    >
      <div class="flex items-center gap-2">
        <!-- пофиксить с бэком -->
        <div
          class="flex items-center justify-center w-5 h-5 rounded-sm"
          :style="boardStyle"
        >
          {{ board.name.charAt(0).toUpperCase() }}
        </div>
        <span v-show="isExpanded" class="text-default !fw500 text-neutral-900 dark:text-neutral-100">
          {{ board.name }}
        </span>
      </div>
    </UiButton>
  </RouterLink>
</template>

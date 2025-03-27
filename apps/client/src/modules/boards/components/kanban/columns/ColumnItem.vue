<script setup lang="ts" generic="T extends Column">
import { computed, toRef } from 'vue'
import { Icon } from '@iconify/vue'
import { useDragAndDrop } from '@formkit/drag-and-drop/vue'
import { animations } from '@formkit/drag-and-drop'
import AddTaskDialog from '../../dialogs/AddNewTask.vue'
import { provideKanbanContext } from '../../../composables/kanban'
import ColumnMenu from './ColumnMenu.vue'
import LimitAccept from './LimitAccept.vue'
import type { Column } from '../../../types'
import { UiBadge, UiButton } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  column: T
}>()

const [_cardsTR, cards] = useDragAndDrop(props.column.cards ?? [], {
  plugins: [
    animations({
      duration: 100,
    }),
  ],
  group: 'kanban-cards',
  accepts: (_parent, lastParent): boolean => {
    if (lastParent.el === _cardsTR.value) {
      return false
    }
    return props.column.limit ? cards.value.length < props.column.limit : true
  },
})

const isDisabled = computed(() => {
  return props.column.limit ? cards.value.length >= props.column.limit : false
})

provideKanbanContext({
  cards,
  column: toRef(props.column),
})
</script>

<template>
  <div class="rounded-lg h-fit max-h-full flex flex-col justify-between gap-0.5 min-w-280px  max-w-280px w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
    <div class="flex items-start flex-col gap-1 w-full p-1.5 pb-0">
      <div draggable="true" class="flex items-center justify-between p-2 px-1 h-7 w-full" aria-selected="false">
        <div draggable="true" class="column-handle cursor-grab active:cursor-grabbing flex items-center gap-1 w-full">
          <div
            class="w-4 h-4 rounded-full border-1.5"
            :style="{ borderColor: column.color, backgroundColor: `${column.color}20` }"
          />
          <span class="text-default ml-0.5 fw500 truncate max-w-110px text-neutral-800 dark:text-neutral-200">
            {{ column.title }}
          </span>
          <LimitAccept :column :cards />
          <UiBadge
            variant="outline"
            class="ml-1.5 text-neutral-500 dark:text-neutral-400 rounded-xl"
          >
            Estimate: {{ column.estimate }}
          </UiBadge>
        </div>
        <ColumnMenu />
      </div>
      <span v-if="column.description" class="text-default ml-2 fw500 truncate max-w-90% text-neutral-400 dark:text-neutral-500">
        {{ column.description }}
      </span>
    </div>
    <div
      ref="_cardsTR"
      :class="cn(
        'flex flex-col gap-1.2 w-full h-full min-h-1 overflow-y-auto scrollbar px-1.5',
        { 'my-1': cards.length },
      )"
    >
      <slot v-if="cards.length" name="column-content" :column :cards />
    </div>
    <div class="p-1.5 pt-0">
      <AddTaskDialog>
        <UiButton
          variant="ghost"
          size="sm"
          class="w-full justify-start h-8 px-1.5"
          :disabled="isDisabled"
        >
          <Icon icon="lucide:plus" class="min-w-4.4 min-h-4.4 text-neutral-500 dark:text-neutral-400" />
          <span class="text-default fw500 text-neutral-600 dark:text-neutral-400">
            {{ $t('kanban.column.tasks.new') }}
          </span>
        </UiButton>
      </AddTaskDialog>
    </div>
  </div>
</template>

<style scoped>
@import '@/styles/_scrollbar';

.scrollbar::-webkit-scrollbar {
  height: 0.25em;
  width: 0.25em;
}
</style>

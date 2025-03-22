<script setup lang="ts" generic="U extends Extract<T['priority'], string>, T extends BoardCard">
import { computed } from 'vue'
import VisibleLabels from '../../additions/VisibleLabels.vue'
import CardBottomPanel from './CardBottomPanel.vue'
import type { BoardCard, Priority } from '@/modules/boards/types'
import { UiButton } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  card: T
  subtasks?: Pick<T, 'subtasks'>[]
}>()

const priorities = {
  none: '',
  low: '!task-card-green',
  medium: '!task-card-yellow',
  high: '!task-card-red',
} as const satisfies Record<U | Priority, string>

const priorityColor = computed(() => priorities[props.card.priority!])
</script>

<template>
  <div
    draggable="true"
    :class="cn(
      'relative z-99 w-full cursor-grab active:cursor-grabbing p-2.5 rounded-md border border-neutral-200 bg-white flex flex-col items-start dark:(border-neutral-700 bg-#2e2e2e)',
      priorityColor && 'border-none',
    )"
  >
    <div
      v-if="priorityColor"
      :class="cn(
        'absolute z--1 inset-0 rounded-md pointer-events-none w-full h-full border after:absolute after:inset-0',
        priorityColor,
      )"
    />
    <div v-if="card.labels?.length" class="flex items-center justify-between gap-2 w-full mb-1.5">
      <VisibleLabels :labels="card.labels" :max="3" class="gap-2" label-class="!max-w-40" />
    </div>
    <div class="flex flex-col w-full gap-1 mb-4">
      <p class="text-default font-medium mb-1 truncate">
        {{ card.title }}
      </p>
      <div class="flex items-stretch gap-1.5 w-full h-fit ml-0.5">
        <div class="min-w-2px bg-neutral-200 rounded-xl dark:bg-neutral-600" />
        <div class="flex flex-col gap-1 w-full">
          <UiButton
            v-for="subtask in card.subtasks"
            :key="subtask._id"
            variant="ghost"
            class="!h-7 w-full justify-start !text-neutral-500"
          >
            <span class="truncate dark:text-neutral-300">{{ subtask.title }}</span>
          </UiButton>
        </div>
      </div>
    </div>
    <CardBottomPanel :card />
  </div>
</template>

<script setup lang="ts" generic="U extends Extract<T['priority'], string>, T extends Card">
import { computed } from 'vue'
import VisibleLabels from '../../additions/VisibleLabels.vue'
import CardBottomPanel from './CardBottomPanel.vue'
import type { Card, Priority } from '@/modules/boards/types'
import { UiButton } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  card: T
  subtasks?: Pick<T, 'subtasks'>[]
}>()

const priorities = {
  none: '',
  low: 'bg-green-200/20 border-green-300 dark:(bg-green-400/20 border-green-800)',
  medium: 'bg-yellow-200/20 border-yellow-300 dark:(bg-yellow-400/20 border-yellow-400/20)',
  high: 'bg-red-200/20 border-red-300 dark:(bg-red-400/20 border-red-400/30)',
} as const satisfies Record<U | Priority, string>

const priorityColor = computed(() => priorities[props.card.priority!])
</script>

<template>
  <div
    :class="cn(
      'w-full p-2.5 rounded-md border border-neutral-200 bg-white flex flex-col items-start dark:(border-neutral-700 bg-neutral-700/30)',
      priorityColor,
    )"
  >
    <div v-if="card.labels?.length" class="flex items-center justify-between gap-2 w-full mb-1.5">
      <VisibleLabels :labels="card.labels" :max="2" class="gap-2" label-class="!max-w-40" />
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

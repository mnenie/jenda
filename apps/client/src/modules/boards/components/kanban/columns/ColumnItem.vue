<script setup lang="ts" generic="T extends Column">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import ColumnMenu from './ColumnMenu.vue'
import type { Column } from '../../../types'
import { UiBadge, UiButton } from '@/shared/ui'

defineProps<{
  column: T
}>()

const colors = ['#32a852', '#c2c734', '#a934c9', '#c93434', '#309dc2']

// пофиксить с бэком
const getRandomColor = computed(() => {
  return colors[Math.floor(Math.random() * colors.length)]
})
</script>

<template>
  <div class="rounded-md h-fit flex flex-col justify-between gap-2 max-w-280px w-full p-1 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
    <div class="flex items-start flex-col gap-1 w-full">
      <div class="flex items-center justify-between p-2 h-7 w-full">
        <div class="flex items-center gap-1">
          <div
            class="w-4 h-4 rounded-full border-1.5"
            :style="{ borderColor: getRandomColor, backgroundColor: `${getRandomColor}20` }"
          />
          <span class="text-default ml-0.5 fw500 text-neutral-800 dark:text-neutral-200">
            {{ column.title }}
          </span>
          <span class="text-neutral-500 dark:text-neutral-400">{{ column.cards?.length }}</span>
          <UiBadge
            variant="outline"
            class="ml-1.5 text-neutral-500 dark:text-neutral-400 rounded-xl"
          >
            Estimate: {{ column.estimate }}
          </UiBadge>
        </div>
        <ColumnMenu />
      </div>
      <span v-if="column.description" class="text-default ml-2 fw500 text-neutral-400 dark:text-neutral-500">
        {{ column.description }}
      </span>
    </div>
    <slot v-if="column.cards?.length" name="column-content" :column :cards="column.cards" />
    <div>
      <UiButton variant="ghost" size="sm" class="w-full justify-start h-8">
        <Icon icon="lucide:plus" class="min-w-4.4 min-h-4.4 text-neutral-500 dark:text-neutral-400" />
        <span class="text-default fw500 text-neutral-600 dark:text-neutral-400">
          {{ $t('kanban.column.tasks.new') }}
        </span>
      </UiButton>
    </div>
  </div>
</template>

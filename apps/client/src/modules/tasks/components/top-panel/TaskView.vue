<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useLocalStorage } from '@vueuse/core'
import type { TaskView } from '../../types'
import { UiButton } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const view = useLocalStorage<TaskView>('task-view', 'compact')

function toggleView() {
  view.value = view.value === 'compact' ? 'expanded' : 'compact'
}

const viewIcon = computed(() =>
  view.value === 'compact' ? 'tabler:arrows-diagonal-2' : 'tabler:arrows-diagonal-minimize',
)
</script>

<template>
  <UiButton
    v-tooltip.bottom-start="{
      content: $t(`task.view.${view}`),
      delay: 100,
      triggers: ['hover'],
    }"
    variant="ghost"
    :class="cn(
      'flex items-center gap-1.5 text-neutral-500 !h-unset',
      [view === 'compact' ? 'p-1.2' : 'p-1.1'],
    )"
    @click="toggleView"
  >
    <Icon
      :icon="viewIcon"
      :class="cn(
        'text-neutral-500 cursor-pointer hover:text-neutral-900 transition-colors dark:text-neutral-400',
        [view === 'compact' ? 'min-w-4.6 min-h-4.6' : 'min-w-5 min-h-5'],
      )"
    />
  </UiButton>
</template>

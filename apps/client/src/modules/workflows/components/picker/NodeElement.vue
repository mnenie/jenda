<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useDragAndDrop } from '../../composables/picker'
import type { PickerNode } from '../../types'
import { UiBadge, UiButton } from '@/shared/ui'

defineProps<{
  node: PickerNode
}>()

const { onDragStart, isDragOver } = useDragAndDrop()
</script>

<template>
  <UiButton
    variant="dashed"
    size="lg"
    class="w-full flex items-center !h-unset justify-between gap-2.5 px-1 py-1 rounded-xl shadow-none cursor-grab"
    :draggable="true"
    :disabled="node.data.paid"
    :class="{
      'cursor-grabbing': isDragOver,
    }"
    @dragstart="onDragStart($event, node.type!, node.data)"
  >
    <div class="flex items-center gap-2.5">
      <div class="flex items-center justify-center p-1.4 2xl:p-1 bg-neutral-100 border border-neutral-200 dark:(bg-#2e2e2e border-neutral-700/60) rounded-lg">
        <Icon :icon="node.data.icon" class="w-4 h-4 text-neutral-800 dark:text-neutral-300" />
      </div>
      <div class="flex flex-col gap-0.5 items-start">
        <span class="text-default text-neutral-900 dark:text-neutral-200">{{ node.data.title }}</span>
      </div>
    </div>
    <UiBadge v-if="node.data.paid" variant="soft" class="p-0 px-1 mr-1.5">
      {{ $t('workflow.nodes.paid') }}
    </UiBadge>
  </UiButton>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useDragAndDrop } from '../../composables/picker'
import type { PickerNode } from '../../types/picker'
import { UiButton } from '@/shared/ui'

defineProps<{
  node: PickerNode
}>()

const { onDragStart } = useDragAndDrop()
</script>

<template>
  <UiButton
    variant="dashed"
    size="lg"
    class="w-full flex items-center !h-unset gap-2 justify-start gap-2.5 px-1.5 py-1.5 rounded-xl shadow-none cursor-default"
    :draggable="true"
    @dragstart="onDragStart($event, node.type!, node.data)"
  >
    <div class="flex items-center justify-center p-1 bg-neutral-100 border border-neutral-200 dark:bg-#2e2e2e rounded-lg">
      <Icon :icon="node.data.icon" class="w-4 h-4 text-neutral-800 dark:text-neutral-300" />
    </div>
    <div class="flex flex-col gap-0.5 items-start">
      <span>{{ node.data.title }}</span>
    </div>
  </UiButton>
</template>

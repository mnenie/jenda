<script setup lang="ts">
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'
import { Panel, useVueFlow } from '@vue-flow/core'
import { Tooltip } from 'floating-vue'
import { storeToRefs } from 'pinia'
import { useFlowStore } from '../../stores/flow'
import type { Direction } from '../../composables/graph'
import { UiButton } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'changeLayout', direction: Direction): void
}>()

const flowStore = useFlowStore()
const { calculateTriggers } = storeToRefs(flowStore)

const {
  nodesDraggable,
  nodesConnectable,
  panOnDrag,
  nodes,
} = useVueFlow()

function toggleFlowSettings<T extends boolean>(draggable: T, connectable: T, pannable: T) {
  nodesDraggable.value = draggable
  nodesConnectable.value = connectable
  panOnDrag.value = pannable
}

const mainHandlers = reactive([
  { name: 'move', icon: 'fluent:cursor-28-filled', active: true, action: () => toggleFlowSettings(true, true, false) },
  { name: 'hand', icon: 'lucide:hand', active: false, action: () => toggleFlowSettings(false, false, true) },
  { name: 'lock', icon: 'lucide:lock-open', active: false, action: () => toggleFlowSettings(false, false, false) },
])

function onAction(action: () => void, item: typeof mainHandlers[number]) {
  mainHandlers.forEach(i => (i.active = i === item))
  action()
}
</script>

<template>
  <Panel position="bottom-center" class="flex items-center gap-4">
    <div class="inline-flex items-center h-12 2xl:h-10 rounded-lg px-1.5 justify-center whitespace-nowrap rounded-md text-default font-medium transition-colors bg-white dark:bg-#2e2e2e">
      <div class="flex items-center gap-1.5">
        <Tooltip
          v-for="item, idx in mainHandlers"
          :key="idx"
        >
          <UiButton
            variant="ghost"
            class="p-1.5 !h-unset rounded-lg"
            :class="item.active ? '!bg-blue-100 dark:!bg-blue-900/30 !text-blue-500' : 'text-neutral-800 dark:text-neutral-200'"
            @click="onAction(item.action, item)"
          >
            <Icon :icon="item.icon" class="min-w-4.6 min-h-4.6 2xl:(min-w-4.2 min-h-4.2)" />
          </UiButton>
          <template #popper>
            {{ $t(`workflow.handlers.${item.name}`) }}
          </template>
        </Tooltip>
      </div>
      <div class="w-1px h-4 bg-neutral-200 dark:bg-neutral-700 mx-2" />
      <div class="flex items-center gap-1.5">
        <Tooltip>
          <UiButton :disabled="!nodes.length || calculateTriggers > 1" variant="ghost" class="p-1.5 !h-unset rounded-lg" @click="emit('changeLayout', 'TB')">
            <Icon icon="mingcute:quill-pen-ai-line" class="min-w-4.8 min-h-4.8 text-purple-400" />
          </UiButton>
          <template #popper>
            {{ $t('workflow.handlers.layout') }}
          </template>
        </Tooltip>
      </div>
    </div>
  </Panel>
</template>

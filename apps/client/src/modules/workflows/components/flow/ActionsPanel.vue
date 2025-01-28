<script setup lang="ts">
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'
import { Panel, useVueFlow } from '@vue-flow/core'
import { Tooltip } from 'floating-vue'

const {
  nodesDraggable,
  nodesConnectable,
  panOnDrag,
} = useVueFlow()

function toggleFlowSettings<T extends boolean>(draggable: T, connectable: T, pannable: T) {
  nodesDraggable.value = draggable
  nodesConnectable.value = connectable
  panOnDrag.value = pannable
}

const panelItems = reactive([
  { name: 'Перемещение', icon: 'fluent:cursor-28-filled', active: true, action: () => toggleFlowSettings(true, true, false) },
  { name: 'Рука', icon: 'lucide:hand', active: false, action: () => toggleFlowSettings(false, false, true) },
  // { name: 'Перегрупировка', icon: 'garden:workflow-26', active: false, action: zapretPane },
])

function onAction(action: () => void, item: typeof panelItems[number]) {
  panelItems.forEach(i => (i.active = i === item))
  action()
}
</script>

<template>
  <Panel position="bottom-center" class="flex items-center gap-4">
    <div class="inline-flex items-center h-12 rounded-md px-2 justify-center whitespace-nowrap rounded-md text-default font-medium transition-colors bg-white dark:bg-#2e2e2e">
      <div class="flex items-center gap-1.5">
        <Tooltip
          v-for="item, idx in panelItems"
          :key="idx"
        >
          <div
            class="p-2 rounded-lg"
            :class="item.active ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-500' : 'text-neutral-800 dark:text-neutral-200'"
            @click="onAction(item.action, item)"
          >
            <Icon :icon="item.icon" class="w-5 h-5" />
          </div>
          <template #popper>
            {{ item.name }}
          </template>
        </Tooltip>
      </div>
    </div>
  </Panel>
</template>

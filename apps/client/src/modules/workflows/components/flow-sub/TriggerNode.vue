<script setup lang="ts">
import { computed } from 'vue'
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../../stores/picker'
import type { NodeProps } from '@vue-flow/core'

const props = defineProps<NodeProps>()

const pickerStore = usePickerStore()
const { selectedNode, target } = storeToRefs(pickerStore)

const name = computed(() => props.data.label ? props.data.label : props.data.title)

const isThisNode = computed(() => props.id === selectedNode.value?.id)

const { nodesDraggable } = useVueFlow()

async function onNodeSelect() {
  if (nodesDraggable.value) {
    pickerStore.selectNode(props.id, {
      type: 'trigger',
      data: props.data,
    })
  }
}
</script>

<template>
  <div
    ref="target"
    class="relative flex flex-col gap-0"
    :class="nodesDraggable && 'cursor-default'"
    @click="onNodeSelect"
  >
    <div
      class="w-full flex items-center justify-between p-2 py-0.5 border border-neutral-200 dark:border-neutral-700 border-b-none rounded-lg rounded-b-none bg-neutral-50 dark:bg-#2e2e2e"
      :class="isThisNode && '!border-blue-300 dark:!border-blue-800'"
    >
      <div class="flex items-center gap-1.5">
        <Icon icon="fluent-mdl2:processing-run" class="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-300" />
        <span class="text-default text-neutral-600 dark:text-neutral-300 whitespace-nowrap">
          {{ $t('workflow.nodes.items[0].title') }}
        </span>
      </div>
    </div>
    <div
      class="p-2 border border-neutral-200 dark:border-neutral-700 rounded-lg rounded-t-none bg-white dark:bg-#2e2e2e w-280px"
      :class="isThisNode && '!border-l-blue-300 !border-r-blue-300 !border-b-blue-300 dark:(!border-l-blue-800 !border-r-blue-800 !border-b-blue-800)'"
    >
      <div class="flex items-center gap-2 w-full">
        <div class="!bg-blue-100 dark:!bg-blue-900/30 !text-blue-500 border-blue-800 p-2 rounded-lg">
          <Icon :icon="data.icon" />
        </div>
        <div class="flex flex-col gap-0.5 w-[84%]">
          <div class="flex items-center gap-2">
            <span class="text-default text-neutral-900 dark:text-neutral-200 whitespace-nowrap">
              {{ name }}
            </span>
            <div
              v-if="!data.actions"
              v-tooltip="{ content: 'Задайте действия', triggers: ['hover'], placement: 'top' }"
              class="flex items-center justify-center bg-red-100 rounded-full w-3.5 h-3.5 dark:bg-red-900/40"
            >
              <Icon icon="ion:alert" class="w-3 h-3 text-red-800 dark:text-red-400" />
            </div>
          </div>
          <span class="text-small truncate text-neutral-600 dark:text-neutral-300 whitespace-nowrap">
            {{ data.description }}
          </span>
        </div>
      </div>
    </div>
    <Handle type="source" :position="Position.Bottom" class="p-1 !bg-white !border-blue-400 dark:!bg-#2e2e2e" />
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../../stores/picker'
import { useNodeChanges } from '../../composables/elements'
import NodeShared from './NodeShared.vue'
import type { NodeProps } from '@vue-flow/core'

const props = defineProps<NodeProps>()

const pickerStore = usePickerStore()
const { target } = storeToRefs(pickerStore)

const {
  isThisNode,
  onNodeSelect,
  nodesDraggable,
  name,
} = useNodeChanges(toRef(props, 'data'), toRef(props, 'id'), 'trigger')
</script>

<template>
  <div
    ref="target"
    class="relative flex flex-col gap-0"
    :class="nodesDraggable && 'cursor-default'"
    @click="onNodeSelect"
  >
    <div
      class="w-fit flex items-center justify-between p-2 py-0.5 border border-neutral-200 dark:border-neutral-700 border-b-none rounded-lg rounded-b-none bg-neutral-50 dark:bg-#2e2e2e"
      :class="isThisNode && '!bg-blue-100 !border-blue-200 dark:(!border-blue-800)'"
    >
      <div
        class="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300"
        :class="isThisNode && '!text-blue-900 dark:text-blue-100'"
      >
        <Icon icon="fluent-mdl2:processing-run" class="w-3 h-3" />
        <span class="text-small whitespace-nowrap">
          {{ $t('workflow.nodes.items[0].title') }}
        </span>
      </div>
    </div>
    <NodeShared :data :is-this-node :name class="rounded-tl-none" />
    <Handle type="source" :position="Position.Bottom" class="p-0.8 !bg-white !border-blue-400 dark:!bg-#2e2e2e" />
  </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../../stores/picker'
import { useNodeChanges } from '../../composables/elements'
import NodeShared from './NodeShared.vue'
import type { NodeProps } from '@vue-flow/core'

const props = defineProps<NodeProps>()

const pickerStore = usePickerStore()
const { target } = storeToRefs(pickerStore)

const { isThisNode, onNodeSelect, nodesDraggable, name } = useNodeChanges(toRef(props, 'data'), toRef(props, 'id'))
</script>

<template>
  <div
    ref="target"
    class="relative flex flex-col gap-0"
    :class="nodesDraggable && 'cursor-default'"
    @click="onNodeSelect"
  >
    <NodeShared :data :is-this-node :name />
    <Handle type="source" :position="Position.Bottom" class="p-0.8 !bg-white !border-blue-400 dark:!bg-#2e2e2e" />
    <Handle type="target" :position="Position.Top" class="!bg-transparent !border-transparent" />
  </div>
</template>

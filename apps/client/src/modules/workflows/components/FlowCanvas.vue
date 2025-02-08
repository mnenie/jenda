<script setup lang="ts">
import { computed, nextTick, useTemplateRef } from 'vue'
import { useVueFlow, VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { useDark, useLocalStorage } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useFlowStore } from '../stores/flow'
import { usePickerStore } from '../stores/picker'
import { useDragAndDrop } from '../composables/picker'
import { type Direction, useGraphLayout } from '../composables/graph'
import { useElementsPosition } from '../composables/elements'
import HandlersPanel from './flow-sub/HandlersPanel.vue'
import TriggerNode from './flow-sub/TriggerNode.vue'
import CommonNode from './flow-sub/CommonNode.vue'

const wrapper = useTemplateRef<InstanceType<typeof VueFlow>>('wrapper')

const flowStore = useFlowStore()
const { nodes, edges } = storeToRefs(flowStore)

const backgroundVariant = useLocalStorage<'dots' | 'lines'>('tabs', 'dots')

const { onConnect, addEdges, fitView, onNodesChange } = useVueFlow()

const { layout } = useGraphLayout()
const { onDragOver, onDrop, onDragLeave } = useDragAndDrop()

async function layoutGraph(direction: Direction) {
  const paintingLayoutPromise = new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
    nodes.value = layout(nodes, edges, direction, wrapper)
    nextTick(() => {
      fitView({ duration: 4000, maxZoom: 1 })
    })
  })
  toast.promise(paintingLayoutPromise, {
    loading: 'Layouting graph',
    success: () => {
      return 'Graph layouted'
    },
    error: () => {
      console.error('Error layouting graph')
    },
  })
}

const pickerStore = usePickerStore()

onNodesChange(async (changes) => {
  for (const change of changes) {
    if (change.type === 'remove' && change.id === pickerStore.selectedNode?.id) {
      pickerStore.clearSelection()
    }
  }
})

const isDark = useDark()

const patternColor = computed(() => {
  if (backgroundVariant.value === 'lines') {
    return isDark.value ? '#52525222' : '#e5e5e588'
  }
  else {
    return isDark.value ? '#73737388' : '#a3a3a3'
  }
})

useElementsPosition()

onConnect(addEdges)
</script>

<template>
  <div
    class="h-full w-full"
    @drop="onDrop"
  >
    <VueFlow
      ref="wrapper"
      v-model:nodes="nodes"
      v-model:edges="edges"
      :default-edge-options="{
        type: 'animation',
        animated: true,
        markerEnd: 'arrowclosed',
      }"
      :pan-on-scroll="true"
      :nodes-draggable="true"
      :nodes-connectable="true"
      :pan-on-drag="false"
      :zoom-on-scroll="false"
      :zoom-on-pinch="true"
      :zoom-on-double-click="true"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      <template #node-trigger="props">
        <TriggerNode v-bind="props" />
      </template>
      <template #node-common="props">
        <CommonNode v-bind="props" />
      </template>
      <HandlersPanel @change-layout="layoutGraph" />
      <Background :gap="15" :color="patternColor" :variant="backgroundVariant" />
      <div v-if="!nodes.length" class="flex items-center gap-2 absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2 text-neutral-400 dark:text-neutral-400">
        <Icon icon="hugeicons:drag-02" />
        <p class="text-default">
          {{ $t('workflow.empty') }}
        </p>
      </div>
    </VueFlow>
  </div>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>

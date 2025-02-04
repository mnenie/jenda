<script setup lang="ts">
import { computed, nextTick, shallowRef, useTemplateRef } from 'vue'
import { useVueFlow, VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { useDark, useLocalStorage } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { type Direction, useGraphLayout } from '../../composables/graph'
import { useDragAndDrop } from '../../composables/picker'
import SpecialNode from './SpecialNode.vue'
import SpecialEdge from './SpecialEdge.vue'
import HandlersPanel from './HandlersPanel.vue'
import type { Edge, Node } from '@vue-flow/core'

const nodes = shallowRef<Node[]>([])

const edges = shallowRef<Edge[]>([])

const wrapper = useTemplateRef<InstanceType<typeof VueFlow>>('wrapper')

const backgroundVariant = useLocalStorage<'dots' | 'lines'>('tabs', 'dots')

const { layout } = useGraphLayout()

const { onConnect, addEdges, fitView } = useVueFlow()

const { onDragOver, onDrop, onDragLeave } = useDragAndDrop()

async function layoutGraph(direction: Direction) {
  const paintingLayoutPromise = new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
    nodes.value = layout(nodes, edges, direction, wrapper)
    nextTick(() => {
      fitView({ duration: 4000, maxZoom: 1.2 })
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

const isDark = useDark()

const patternColor = computed(() => {
  if (backgroundVariant.value === 'lines') {
    return isDark.value ? '#52525222' : '#e5e5e588'
  }
  else {
    return isDark.value ? '#73737388' : '#a3a3a3'
  }
})

onConnect(addEdges)
</script>

<template>
  <div class="h-full w-full" @drop="onDrop">
    <VueFlow
      ref="wrapper"
      v-model:nodes="nodes"
      v-model:edges="edges"
      :default-edge-options="{ type: 'animation', animated: true }"
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
      <template #node-special="specialNodeProps">
        <SpecialNode v-bind="specialNodeProps" />
      </template>
      <HandlersPanel @change-layout="layoutGraph" />
      <Background :gap="15" :color="patternColor" :variant="backgroundVariant" />
      <template #edge-special="specialEdgeProps">
        <SpecialEdge v-bind="specialEdgeProps" />
      </template>
    </VueFlow>
  </div>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>

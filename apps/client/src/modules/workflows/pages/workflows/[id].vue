<script setup lang="ts">
import { shallowRef } from 'vue'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { useHead } from '@unhead/vue'
import { toast } from 'vue-sonner'
import SpecialNode from '../../components/flow/SpecialNode.vue'
import SpecialEdge from '../../components/flow/SpecialEdge.vue'
import HandlersPanel from '../../components/flow/HandlersPanel.vue'
import WorkflowHead from '../../components/layout/WorkflowHead.vue'
import { type Direction, useLayout } from '../../composables/layout'
import ProductionAlert from '../../components/flow/ProductionAlert.vue'
import type { Edge, Node } from '@vue-flow/core'

const nodes = shallowRef<Node[]>([
  {
    id: '1',
    type: 'input',
    position: { x: 250, y: 5 },
    data: { label: 'Node 1' },
  },

  {
    id: '2',
    position: { x: 100, y: 100 },
    data: { label: 'Node 2' },
  },

  {
    id: '3',
    type: 'output',
    position: { x: 400, y: 200 },
    data: { label: 'Node 3' },
  },
  {
    id: '4',
    type: 'special',
    position: { x: 400, y: 200 },
    data: {
      label: 'Node 4',
      hello: 'world',
    },
  },
])

const edges = shallowRef<Edge[]>([
  {
    id: 'e1->2',
    source: '1',
    target: '2',
  },
  {
    id: 'e2->3',
    source: '2',
    target: '3',
    animated: true,
  },
  {
    id: 'e3->4',
    type: 'special',
    source: '3',
    target: '4',
    data: {
      hello: 'world',
    },
  },
])

const { layout } = useLayout()

async function layoutGraph(direction: Direction) {
  const paintingLayoutPromise = new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
    nodes.value = layout(nodes.value, edges.value, direction)
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
// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'workflows',
        icon: 'carbon:workflow-automation',
        name: 'workflows',
        to: { name: 'workflows' },
      },
      {
        name: 'workflows-id',
        // mock
        value: 'Workflow 1',
        to: { name: 'workflows-id', params: { id: '1' } },
      },
    ],
  },
  name: 'workflows-id',
})

useHead({
  title: 'Workflows - Jenda',
})
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <WorkflowHead />
    <div class="h-full w-full flex items-center">
      <div class="relative bg-neutral-50 dark:bg-neutral-800 h-full w-full">
        <VueFlow
          :nodes="nodes"
          :edges="edges"
          :default-edge-options="{ type: 'animation', animated: true }"
          :pan-on-scroll="true"
          :nodes-draggable="true"
          :nodes-connectable="true"
          :pan-on-drag="false"
          :zoom-on-scroll="false"
          :zoom-on-pinch="true"
          :zoom-on-double-click="true"
        >
          <template #node-special="specialNodeProps">
            <SpecialNode v-bind="specialNodeProps" />
          </template>
          <HandlersPanel @change-layout="layoutGraph" />
          <Background />
          <template #edge-special="specialEdgeProps">
            <SpecialEdge v-bind="specialEdgeProps" />
          </template>
        </VueFlow>
        <ProductionAlert />
      </div>
      <!-- <ChoosePanel /> -->
    </div>
  </div>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>

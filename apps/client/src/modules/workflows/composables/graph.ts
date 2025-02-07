import { effectScope, onScopeDispose, shallowRef, toValue, watch } from 'vue'
import dagre from '@dagrejs/dagre'
import { Position, useVueFlow } from '@vue-flow/core'
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../stores/picker'
import type { MaybeRefOrGetter } from 'vue'
import type { Edge, Node } from '@vue-flow/core'

export type Direction = 'LR' | 'TB'

export const DEFAULT_DIRECTION = 'TB'

export function useGraphLayout<T extends Node, U extends Edge>() {
  const graph = shallowRef(new dagre.graphlib.Graph<T>())
  const { findNode, getViewport } = useVueFlow()

  const { zoom } = getViewport()

  function layout(nodes: MaybeRefOrGetter<T[]>, edges: MaybeRefOrGetter<U[]>, direction: Direction, wrapper: MaybeRefOrGetter<any>): T[] {
    const dagreGraph = new dagre.graphlib.Graph<T>()
    graph.value = dagreGraph
    dagreGraph.setDefaultEdgeLabel(() => ({}))

    dagreGraph.setGraph({
      ranksep: 50,
      rankdir: direction,
      nodesep: 50,
    })

    const _nodes = toValue(nodes)
    const _edges = toValue(edges)
    const { x: offsetX, y: offsetY } = toValue(wrapper).$el.getBoundingClientRect()

    for (const node of _nodes) {
      // нужно пофиксить я думаю -> на new Map и потом юзать map.get(node.id)
      // | подумаю потом 👇 смотря на все узлы
      const graphNode = findNode(node.id)
      if (!graphNode)
        continue
      dagreGraph.setNode(node.id, { width: graphNode.dimensions.width, height: graphNode.dimensions.height })
    }
    for (const edge of _edges) {
      dagreGraph.setEdge(edge.source, edge.target)
    }

    dagre.layout(dagreGraph)

    return _nodes.map((node) => {
      const n = dagreGraph.node(node.id)
      return {
        ...node,
        targetPosition: Position.Top,
        sourcePosition: Position.Bottom,
        position: { x: n.x * zoom + offsetX, y: n.y * zoom + offsetY },
      }
    })
  }

  return {
    graph,
    layout,
  }
}

export function useElementsPosition() {
  const scope = effectScope()
  const pickerStore = usePickerStore()
  const { isSettingsOpen } = storeToRefs(pickerStore)

  const { fitView } = useVueFlow()

  scope.run(() => {
    // пофиксить со skeleton
    watch(isSettingsOpen, async () => {
      await fitView({ duration: 1000, maxZoom: 1, includeHiddenNodes: true, offset: { y: -50 } })
    }, { immediate: true, flush: 'post' })
  })

  onScopeDispose(() => {
    scope.stop()
  })
}

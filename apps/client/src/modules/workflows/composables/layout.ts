import { shallowRef } from 'vue'
import dagre from '@dagrejs/dagre'
import { type Edge, type Node, Position, useVueFlow } from '@vue-flow/core'

export type Direction = 'LR' | 'TB'

export const DEFAULT_DIRECTION = 'TB'

export function useLayout() {
  const graph = shallowRef(new dagre.graphlib.Graph())
  const { findNode } = useVueFlow()

  const layout = (nodes: Node[], edges: Edge[], direction: Direction): Node[] => {
    const dagreGraph = new dagre.graphlib.Graph()
    graph.value = dagreGraph
    dagreGraph.setDefaultEdgeLabel(() => ({}))

    const isHorizontal = direction === 'LR'
    dagreGraph.setGraph({
      ranksep: 50,
      rankdir: direction,
    })

    for (const node of nodes) {
      const graphNode = findNode(node.id)
      if (!graphNode) {
        continue
      }
      dagreGraph.setNode(node.id, { width: graphNode.dimensions.width, height: graphNode.dimensions.height })
    }
    for (const edge of edges) {
      dagreGraph.setEdge(edge.source, edge.target)
    }

    dagre.layout(dagreGraph)

    return nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id)
      return {
        ...node,
        targetPosition: isHorizontal ? Position.Left : Position.Top,
        sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
        position: { x: nodeWithPosition.x, y: nodeWithPosition.y },
      }
    })
  }

  return {
    graph,
    layout,
  }
}

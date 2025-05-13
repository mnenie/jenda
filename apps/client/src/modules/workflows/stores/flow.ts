import { computed, shallowRef } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Edge, Node } from '@vue-flow/core'

export const useFlowStore = defineStore('flow', () => {
  const nodes = shallowRef<Node[]>([])
  const edges = shallowRef<Edge[]>([])

  const edgesConnectionMap = computed(() => {
    const map = new Map<string, boolean>()
    edges.value.forEach((edge) => {
      map.set(edge.source, true)
    })
    return map
  })

  const calculateTriggers = computed(() => nodes.value.reduce((acc: number, node: Node) => {
    if (node.type === 'trigger')
      return acc + 1
    return acc
  }, 0))

  function removeNode(id: string) {
    nodes.value = nodes.value.filter(node => node.id !== id)
  }

  return {
    nodes,
    edges,
    edgesConnectionMap,
    calculateTriggers,
    removeNode,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFlowStore, import.meta.hot))
}

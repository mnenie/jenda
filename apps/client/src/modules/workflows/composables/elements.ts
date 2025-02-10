import { computed, effectScope, type MaybeRefOrGetter, onScopeDispose, toValue, watch } from 'vue'
import { type Node, useVueFlow } from '@vue-flow/core'
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../stores/picker'

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

export function useNodeChanges(data: MaybeRefOrGetter<Node['data']>, id: MaybeRefOrGetter<string>, type: string) {
  const pickerStore = usePickerStore()
  const { selectedNode } = storeToRefs(pickerStore)

  const name = computed(() => {
    const nodeData = toValue(data)
    return nodeData.label ? nodeData.label : nodeData.title
  })

  const isThisNode = computed(() => toValue(id) === toValue(selectedNode)?.id)

  const { nodesDraggable } = useVueFlow()

  function onNodeSelect() {
    if (nodesDraggable.value) {
      pickerStore.selectNode(toValue(id), {
        type,
        data: toValue(data),
      })
    }
  }

  return {
    selectedNode,
    nodesDraggable,
    name,
    isThisNode,
    onNodeSelect,
  }
}

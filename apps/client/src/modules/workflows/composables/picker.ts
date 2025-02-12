import { ref, shallowRef, watch } from 'vue'
import { type Node, useVueFlow } from '@vue-flow/core'

function getId() {
  return Math.random().toString(36).slice(2)
}

const state = {
  draggedType: ref<string | null | undefined>(null),
  isDragOver: ref(false),
  isDragging: ref(false),
  draggedData: shallowRef<Node['data']>({}),
}

export function useDragAndDrop() {
  const { draggedType, isDragOver, isDragging, draggedData } = state

  const { addNodes, screenToFlowCoordinate, onNodesInitialized, updateNode } = useVueFlow()

  function onDragStart(e: unknown, type: string, data: Node['data']) {
    const event = e as DragEvent
    if (event.dataTransfer) {
      event.dataTransfer.setData('application/vueflow', type)
      event.dataTransfer.effectAllowed = 'move'
    }
    draggedData.value = data
    draggedType.value = type
    isDragging.value = true
    document.addEventListener('drop', onDragEnd)
  }

  function onDragOver(e: unknown) {
    const event = e as DragEvent
    event.preventDefault()
    if (draggedType.value) {
      isDragOver.value = true
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
      }
    }
  }

  function onDragLeave() {
    isDragOver.value = false
  }

  function onDragEnd() {
    isDragging.value = false
    isDragOver.value = false
    draggedType.value = null
    document.removeEventListener('drop', onDragEnd)
  }

  function onDrop(e: unknown) {
    const event = e as DragEvent
    const position = screenToFlowCoordinate({
      x: event.clientX,
      y: event.clientY,
    })

    const nodeId = getId()

    const newNode = {
      id: nodeId,
      type: draggedType.value!,
      position,
      data: draggedData.value,
    }
    const { off } = onNodesInitialized(() => {
      updateNode(nodeId, node => ({
        position: { x: node.position.x - node.dimensions.width / 2, y: node.position.y - node.dimensions.height / 2 },
      }))

      off()
    })
    addNodes(newNode)
  }

  watch(isDragging, (dragging) => {
    document.body.style.userSelect = dragging ? 'none' : ''
  })

  return {
    draggedType,
    isDragOver,
    isDragging,
    onDragStart,
    onDragLeave,
    onDragOver,
    onDrop,
  }
}

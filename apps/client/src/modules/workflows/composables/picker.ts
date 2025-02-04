import { inject, provide, ref, watch } from 'vue'
import { useVueFlow } from '@vue-flow/core'
import type { InjectionKey, Ref } from 'vue'

export interface PickerContext {
  togglePicker: () => void
  isPickerOpen: Ref<boolean>
}

function getId() {
  return Math.random().toString(36).slice(2)
}

// возможно сделаю через shared composable
const state = {
  draggedType: ref<string | null | undefined>(null),
  isDragOver: ref(false),
  isDragging: ref(false),
}

export function useDragAndDrop() {
  const { draggedType, isDragOver, isDragging } = state

  const { addNodes, screenToFlowCoordinate, onNodesInitialized, updateNode } = useVueFlow()

  function onDragStart(event: DragEvent, type: string) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('application/vueflow', type)
      event.dataTransfer.effectAllowed = 'move'
    }
    draggedType.value = type
    isDragging.value = true
    document.addEventListener('drop', onDragEnd)
  }

  function onDragOver(event: DragEvent) {
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
    draggedType.value = '232'
    document.removeEventListener('drop', onDragEnd)
  }

  function onDrop(event: DragEvent) {
    const position = screenToFlowCoordinate({
      x: event.clientX,
      y: event.clientY,
    })

    const nodeId = getId()

    const newNode = {
      id: nodeId,
      type: draggedType.value!,
      position,
      data: { label: `New ${draggedType.value}` },
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

const key: InjectionKey<PickerContext> = Symbol('workflow-picker')

export function providePickerContext<T extends PickerContext>(value: T) {
  return provide(key, value)
}

export function usePickerContext() {
  return inject(key)!
}

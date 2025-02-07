import { ref, shallowRef, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import type { PickerNode, SelectedPickerNode } from '../types/picker'

export const usePickerStore = defineStore('picker', () => {
  const selectedNode = shallowRef<Partial<SelectedPickerNode> | null>(null)
  const target = shallowRef<HTMLElement | null>(null)
  const panel = shallowRef<HTMLElement | null>(null)
  const isPickerOpen = ref(false)
  const isSettingsOpen = ref(false)

  function selectNode(id: string, data: PickerNode) {
    selectedNode.value = { id, ...data }
    isSettingsOpen.value = true
  }

  function clearSelection() {
    selectedNode.value = null
    isSettingsOpen.value = false
  }

  onClickOutside(target, () => {
    clearSelection()
  }, { ignore: [panel] })

  watchEffect(() => {
    if (!selectedNode.value) {
      isSettingsOpen.value = false
    }
  })

  return {
    isPickerOpen,
    selectedNode,
    target,
    panel,
    isSettingsOpen,
    selectNode,
    clearSelection,
  }
})

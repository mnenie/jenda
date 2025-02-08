import { effectScope, onScopeDispose, watch } from 'vue'
import { useVueFlow } from '@vue-flow/core'
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

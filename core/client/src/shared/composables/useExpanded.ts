import { inject, provide, type Ref, toRef } from 'vue'
import { expandedKey } from '../constants'

interface Expanded {
  isExpanded: Ref<boolean>
  onToggleArea: () => void
}

export function useExpanded() {
  const createExpandedContext = (expanded: Expanded) => {
    provide(expandedKey, {
      isExpanded: toRef(expanded, 'isExpanded'),
      onToggleArea: expanded.onToggleArea,
    })
  }

  const getExpanded = () => inject(expandedKey)!

  return {
    createExpandedContext,
    getExpanded,
  }
}

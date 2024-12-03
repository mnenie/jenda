import { inject, type InjectionKey, provide, type Ref, toRef } from 'vue'

interface Expanded {
  isExpanded: Ref<boolean>
  onToggleArea: () => void
}
const expandedKey: InjectionKey<Expanded> = Symbol('expanded')

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

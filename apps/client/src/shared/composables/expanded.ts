import { inject, provide } from 'vue'
import type { InjectionKey, Ref } from 'vue'

interface ExpandedContext {
  isExpanded: Ref<boolean>
  onToggleArea: () => void
}

const key: InjectionKey<ExpandedContext> = Symbol('expanded')

export function provideExpandedContext<T extends ExpandedContext>(value: T) {
  provide(key, value)
}

export function useExpandedContext() {
  return inject(key)!
}

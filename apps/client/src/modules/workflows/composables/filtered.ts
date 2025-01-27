import { inject, provide } from 'vue'
import type { InjectionKey, Ref } from 'vue'

interface FilteredWorkflowsContext {
  sortModel: Ref<string>
}

const key: InjectionKey<FilteredWorkflowsContext> = Symbol('filtered-workflows')

export function provideFilteredWorkflowsContext<T extends FilteredWorkflowsContext>(value: T) {
  provide(key, value)
}

export function useFilteredWorkflowsContext() {
  return inject(key)!
}

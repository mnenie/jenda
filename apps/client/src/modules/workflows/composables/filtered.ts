import { computed, inject, provide } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import type { Workflow } from '../types'

interface FilteredWorkflowsContext {
  sortModel: Ref<string>
  search: Ref<string>
}

export function useFilteredWorkflows<U extends Workflow[]>(workflows: Ref<U>, sortModel: Ref<string>) {
  const filteredWorkflows = computed(() =>
    [...workflows.value].sort((a, b): number => {
      if (sortModel.value === 'date') {
        return (b.updatedAt ? +new Date(b.updatedAt) : 0) - (a.updatedAt ? +new Date(a.updatedAt) : 0)
      }
      return 0
    }))
  return {
    filteredWorkflows,
  }
}

const key: InjectionKey<FilteredWorkflowsContext> = Symbol('filtered-workflows')

export function provideFilteredWorkflowsContext<T extends FilteredWorkflowsContext>(value: T) {
  provide(key, value)
}

export function useFilteredWorkflowsContext() {
  return inject(key)!
}

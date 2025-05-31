import { computed, inject, provide, toValue } from 'vue'
import type { InjectionKey, MaybeRefOrGetter, Ref } from 'vue'
import type { Workflow } from '../types'
import type { FilteredWorkflowsContext } from '../types/contexts'

export function useFilteredWorkflows<U extends Workflow[]>(workflows: MaybeRefOrGetter<U>, sortModel: Ref<string>) {
  const filteredWorkflows = computed(() =>
    [...toValue(workflows)].sort((a, b): number => {
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

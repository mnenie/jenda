import { computed, inject, provide } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import type { Note } from '../types'

export function useFilteredNotes<U extends Note[]>(notes: Ref<U>, sortModel: Ref<string>) {
  const filteredNotes = computed(() => [...notes.value].sort((a, b): number => {
    if (sortModel.value === 'date') {
      return (b.date ? +new Date(b.date) : 0) - (a.date ? +new Date(a.date) : 0)
    }
    return 0
  }))

  return {
    filteredNotes,
  }
}

interface FilteredNotesContext {
  sortModel: Ref<string>
}

type T = FilteredNotesContext

const key: InjectionKey<FilteredNotesContext> = Symbol('filtered-notes')

export function provideFilteredNotesContext(value: T) {
  provide(key, value)
  return value
}

export function useFilteredNotesContext<
  U extends T | undefined = T,
>(
  fallback?: U,
): U extends null ? T | null : T {
  const expanded = inject(key, fallback)
  if (expanded)
    return expanded as T

  if (expanded === null)
    return expanded as any

  throw new Error('not provided')
}

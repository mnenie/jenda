import { computed, inject, provide } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import type { Note } from '../types'

interface FilteredNotesContext {
  sortModel: Ref<string>
}

export function useFilteredNotes<U extends Note[]>(notes: Ref<U>, sortModel: Ref<string>) {
  const filteredNotes = computed(() =>
    [...notes.value].sort((a, b): number => {
      if (sortModel.value === 'date') {
        return (b.date ? +new Date(b.date) : 0) - (a.date ? +new Date(a.date) : 0)
      }
      return 0
    }))

  return {
    filteredNotes,
  }
}

const key: InjectionKey<FilteredNotesContext> = Symbol('filtered-notes')

export function provideFilteredNotesContext<T extends FilteredNotesContext>(value: T) {
  provide(key, value)
}

export function useFilteredNotesContext() {
  return inject(key)!
}

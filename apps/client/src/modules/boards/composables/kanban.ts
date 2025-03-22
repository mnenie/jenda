import { inject, provide, toValue } from 'vue'
import { makeDestructurable } from '@vueuse/core'
import type { InjectionKey, MaybeRefOrGetter, Ref } from 'vue'
import type { BoardCard } from '../types'

interface KanbanContext {
  cards: MaybeRefOrGetter<BoardCard[]>
}

export function useTaskCombobox<T, K extends keyof T>(items: Ref<T[]>, key: K) {
  function removeById(userId: T[K]) {
    const index = toValue(items).findIndex(u => u[key] === userId)
    if (index > -1) {
      toValue(items).splice(index, 1)
    }
  }
  function removeEntity(value: T) {
    if (value[key]) {
      removeById(value[key])
    }
  }
  function addEntity(value: T) {
    const isAdded = toValue(items).some(i => i[key] === value[key])
    isAdded ? removeById(value[key]) : toValue(items).push(value)
  }

  return makeDestructurable(
    { removeEntity, addEntity },
    [removeEntity, addEntity],
  )
}

const key: InjectionKey<KanbanContext> = Symbol('kanban')

export function provideKanbanContext<T extends KanbanContext>(value: T) {
  provide(key, value)
}

export function useKanbanContext() {
  return inject(key)!
}

import { inject, type InjectionKey, provide } from 'vue'
import type { TaskContext } from '../types/contexts'

const TASK_CONTEXT_KEY: InjectionKey<TaskContext> = Symbol('task')

export function provideTaskContext<T extends TaskContext>(value: T) {
  provide(TASK_CONTEXT_KEY, value)
}

export function useTaskContext() {
  return inject(TASK_CONTEXT_KEY)!
}

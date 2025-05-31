import { inject, type InjectionKey, provide } from 'vue'
import type { SelectedNodeContext } from '../types/contexts'

const key: InjectionKey<SelectedNodeContext> = Symbol('selected-node')

export function provideSelectedNodeContext<T extends SelectedNodeContext>(value: T) {
  provide(key, value)
}

export function useSelectedNodeContext() {
  return inject(key)!
}

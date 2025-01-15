import { inject, provide } from 'vue'
import type { InjectionKey, Ref } from 'vue'

interface Expanded {
  isExpanded: Ref<boolean>
  onToggleArea: () => void
}

type T = Expanded

const key: InjectionKey<Expanded> = Symbol('expanded')

export function provideExpandedContext(value: T) {
  provide(key, value)
  return value
}

export function useExpandedContext<
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

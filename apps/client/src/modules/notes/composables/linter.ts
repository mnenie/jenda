import { inject, provide } from 'vue'
import type { InjectionKey, Ref } from 'vue'

interface LinterContext {
  isLinterEnabled: Ref<boolean>
  toggleLinter: () => void
}

type T = LinterContext

const key: InjectionKey<LinterContext> = Symbol('note-editor-linter')

export function provideLinterContext(value: T) {
  provide(key, value)
  return value
}

export function useLinterContext<
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

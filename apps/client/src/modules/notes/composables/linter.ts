import { inject, provide } from 'vue'
import type { InjectionKey, Ref } from 'vue'

interface LinterContext {
  isLinterEnabled: Ref<boolean>
  toggleLinter: () => void
}

const key: InjectionKey<LinterContext> = Symbol('note-editor-linter')

export function provideLinterContext<T extends LinterContext>(value: T) {
  provide(key, value)
}

export function useLinterContext() {
  return inject(key)!
}

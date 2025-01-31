import { inject, type InjectionKey, provide } from 'vue'

interface AuthWorkspaceContext {
  reset: () => void
  openFileChooser: (event: any) => void
}

const key: InjectionKey<AuthWorkspaceContext> = Symbol('auth-workspace-chooser')

export function provideWorkspaceChooserContext<T extends AuthWorkspaceContext>(value: T) {
  provide(key, value)
}

export function useWorkspaceChooserContext() {
  return inject(key)!
}

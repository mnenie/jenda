import { inject, type InjectionKey, provide } from 'vue'

interface AuthWorkspace {
  reset: () => void
  openFileChooser: (event: any) => void
}

type T = AuthWorkspace

const key: InjectionKey<AuthWorkspace> = Symbol('auth-workspace-chooser')

export function provideWorkspaceChooserContext(value: T) {
  provide(key, value)
  return value
}

export function useWorkspaceChooserContext<
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

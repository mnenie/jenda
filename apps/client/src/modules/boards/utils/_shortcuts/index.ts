import type { ModuleShortcuts } from '@/shared/libs/unocss/types'

export const boardsModuleShortcuts = [
  [/^task-card-(.*)$/, ([, c]) => `bg-${c}-100/20 border-${c}-300/80 dark:(bg-${c}-100/10 border-${c}-300/30)`],
] as ModuleShortcuts

import type { Preset, StaticShortcutMap } from '@unocss/core'
import { alert } from './alert'
import { badge } from './badge'
import { btn } from './button'
import { dialog } from './dialog'
import { dropdownMenu } from './dropdown-menu'
import { input } from './input'
import { pinInput } from './pin-input'
import { select } from './select'

export const shortcuts = [
  ...btn,
  ...input,
  ...badge,
  ...alert,
  ...dropdownMenu,
  ...select,
  ...dialog,
  ...pinInput,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>

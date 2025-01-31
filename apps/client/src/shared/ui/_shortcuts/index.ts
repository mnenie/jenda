import { alert } from './alert'
import { badge } from './badge'
import { btn } from './button'
import { dialog } from './dialog'
import { dropdownMenu } from './dropdown-menu'
import { form } from './form'
import { input } from './input'
import { pinInput } from './pin-input'
import { select } from './select'
import { popover } from './popover'
import { command } from './command'
import { tabs } from './tabs'
import { pagination } from './pagination'
import { table } from './table'
import { checkbox } from './checkbox'
import { picker } from './picker'
import { tagsInput } from './tags-input'
import { _switch } from './switch'
import { textarea } from './textarea'
import type { Preset, StaticShortcutMap } from '@unocss/core'

export const shortcuts = [
  ...btn,
  ...input,
  ...textarea,
  ...badge,
  ...alert,
  ...dropdownMenu,
  ...select,
  ...dialog,
  ...pinInput,
  ...form,
  ...popover,
  ..._switch,
  ...command,
  ...tabs,
  ...pagination,
  ...checkbox,
  ...table,
  ...picker,
  ...tagsInput,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>

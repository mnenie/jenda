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
import { sheet } from './sheet'
import { collapsible } from './collapsible'
import { calendar } from './calendar'
import { contextMenu } from './context-menu'
import type { PresetShortcuts } from '../../libs/unocss/types'
import type { StaticShortcutMap } from 'unocss'

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
  ...sheet,
  ...collapsible,
  ...calendar,
  ...contextMenu,
] as PresetShortcuts<StaticShortcutMap>

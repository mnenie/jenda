import { authModuleShortcuts } from '../../../../modules/auth/utils/_shortcuts'
import { boardsModuleShortcuts } from '../../../../modules/boards/utils/_shortcuts'
import type { Preset, StaticShortcutMap } from 'unocss'
import type { PresetShortcuts } from '../types'

export default function presetModules(): Preset {
  return {
    name: 'modules/preset',
    shortcuts: [
      ...boardsModuleShortcuts,
      ...authModuleShortcuts,
    ] as PresetShortcuts<StaticShortcutMap>,
  }
}

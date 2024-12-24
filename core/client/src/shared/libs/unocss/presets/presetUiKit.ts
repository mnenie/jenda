import type { Preset } from 'unocss'
import { shortcuts } from '../../../ui/shortcuts'

export default function presetJendaUI(): Preset {
  return {
    name: '@jenda-ui/preset',
    shortcuts,
  }
}

import { shortcuts } from '../../../ui/shortcuts'
import type { Preset } from 'unocss'

export default function presetJendaUI(): Preset {
  return {
    name: '@jenda-ui/preset',
    shortcuts,
  }
}

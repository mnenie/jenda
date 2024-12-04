import fs from 'node:fs/promises'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // TODO
  ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        'lucid': () => import('@iconify-json/lucide/icons.json').then(i => i.default),
        'hero': () => import('@iconify-json/hugeicons/icons.json').then(i => i.default),
        'jenda-custom': {
          'file-import': () => fs.readFile('./src/shared/assets/icons/custom-jenda/import.svg', 'utf-8'),
          'project': () => fs.readFile('./src/shared/assets/icons/custom-jenda/project.svg', 'utf-8'),
        },
      },
    }),
    presetTypography(),
  ],
})

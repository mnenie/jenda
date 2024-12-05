import fs from 'node:fs/promises'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
// import { presetDefaultToPx } from './src/shared/lib/unocss/presets'

export default defineConfig({
  presets: [
    presetAttributify({
      ignoreAttributes: [
        'size',
        'variant',
      ],
    }),
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
    // presetDefaultToPx(),
  ],
  shortcuts: [
    {
      'form-field': 'grid gap-2 justify-items-start',
      'form-label': 'text-sm text-neutral-900 !fw500 dark:text-neutral-200',
    },
  ],
  rules: [
    [
      'bg-neutral-800',
      { 'background-color': 'rgba(28, 28, 28, 1)' },
    ],
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|mdx?|html)($|\?)/,
        'src/**/*.stories.{js,ts}',
        'stories/**/*',
      ],
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

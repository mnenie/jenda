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
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'
import presetJendaUI from './src/shared/libs/unocss/presets/presetUiKit'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      ignoreAttributes: [
        'size',
        'variant',
      ],
    }),
    presetAnimations(),
    presetShadcn({ color: 'neutral' }, false),
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
    presetJendaUI(),
    presetTypography(),
  ],
  shortcuts: [
    {
      'form-field': 'grid gap-2 justify-items-start',
      'form-label': 'text-sm text-neutral-900 !fw500 dark:text-neutral-200',
      'auth-page': 'h-full flex w-68% max-[1440px]:w-80% max-[1100px]:!w-full',
      'auth-slot-container': 'relative h-full w-full mx-auto px-2rem dark:bg-#1c1c1c',
    },
    {
      'bg-main': 'bg-white dark:bg-#262626',
      'border-layout': 'border-neutral-200 dark:border-#1c1c1c',
      'bg-sidebar': 'bg-neutral-50 dark:bg-#1c1c1c66',
    },
  ],
  configDeps: [
    './src/shared/lib/unocss/presets/presetUiKit.ts',

    './src/shared/ui/_shortcuts/button.ts',
    './src/shared/ui/_shortcuts/badge.ts',
    './src/shared/ui/_shortcuts/input.ts',
    './src/shared/ui/_shortcuts/alert.ts',
    './src/shared/ui/_shortcuts/dropdown-menu.ts',
    './src/shared/ui/_shortcuts/select.ts',
    './src/shared/ui/_shortcuts/dialog.ts',
    './src/shared/ui/_shortcuts/index.ts',
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|mdx?|html)($|\?)/,
        '(components|src)/**/*.{js,ts}',
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

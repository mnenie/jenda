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
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetJendaUI, presetModules } from './src/shared/libs/unocss/presets'

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
    presetShadcn(
      { color: 'neutral' },
      { componentLibrary: 'radix', globals: false },
    ),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
        huge: () => import('@iconify-json/hugeicons/icons.json').then(i => i.default),
        jenda: FileSystemIconLoader('./src/shared/assets/icons/custom-jenda'),
      },
    }),
    presetJendaUI(),
    presetModules(),
    presetTypography(),
  ],
  shortcuts: [
    {
      'font-medium': 'fw430',
      'text-default': 'text-base 2xl:text-sm',
      'text-large': 'text-lg 2xl:text-base',
      'text-small': 'text-sm 2xl:text-xs',
      'h-default': 'h-9 2xl:h-8',
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
    './src/shared/ui/_shortcuts/textarea.ts',
    './src/shared/ui/_shortcuts/pin-input.ts',
    './src/shared/ui/_shortcuts/form.ts',
    './src/shared/ui/_shortcuts/popover.ts',
    './src/shared/ui/_shortcuts/picker.ts',
    './src/shared/ui/_shortcuts/command.ts',
    './src/shared/ui/_shortcuts/tabs.ts',
    './src/shared/ui/_shortcuts/pagination.ts',
    './src/shared/ui/_shortcuts/checkbox.ts',
    './src/shared/ui/_shortcuts/switch.ts',
    './src/shared/ui/_shortcuts/table.ts',
    './src/shared/ui/_shortcuts/tags-input.ts',
    './src/shared/ui/_shortcuts/sheet.ts',
    './src/shared/ui/_shortcuts/collapsible.ts',
    './src/shared/ui/_shortcuts/calendar.ts',
    './src/shared/ui/_shortcuts/context-menu.ts',
    './src/shared/ui/_shortcuts/combobox.ts',
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

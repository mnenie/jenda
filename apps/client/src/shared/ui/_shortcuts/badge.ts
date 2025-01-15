type BadgePrefix = 'badge'

export const staticBadge: Record<`${BadgePrefix}-${string}` | BadgePrefix, string> = {
  'badge': 'inline-flex items-center rounded-md border border-solid border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:(outline-none ring-2 ring-neutral-950 ring-offset-2) dark:(border-neutral-700 focus:ring-neutral-300)',

  'badge-default': 'border-transparent bg-neutral-900 text-neutral-50 shadow dark:(bg-neutral-50 text-neutral-900)',
  'badge-secondary': 'border-transparent bg-neutral-100 text-neutral-900 dark:(bg-neutral-800 text-neutral-50)',
  'badge-outline': 'text-neutral-950 dark:text-neutral-50',
  'badge-solid': '!border-transparent bg-#266df0 text-neutral-50 shadow',
}

export const dynamicBadge: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^badge-colorized-(.*)$/, ([, c]) => `border-transparent bg-${c}-500 text-neutral-50 shadow dark:(bg-${c}-900 text-neutral-50 border-transparent)`],
  [/^badge-soft(?:-(.+))?$/, ([, c = 'blue']) => `!border-transparent bg-${c}-100 text-${c}-700 dark:bg-${c}-900 dark:text-${c}-100`],
]

export const badge = [
  ...dynamicBadge,
  staticBadge,
]

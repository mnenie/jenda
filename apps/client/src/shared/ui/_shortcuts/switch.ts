type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  'switch': 'inline-flex h-5 w-7.5 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50',
  'switch-thumb': 'pointer-events-none block h-3 w-3 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0',

  'switch-default': 'focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:(focus-visible:ring-neutral-300 focus-visible:ring-offset-neutral-950 data-[state=checked]:bg-neutral-50 data-[state=unchecked]:bg-neutral-700)',
  'switch-thumb-default': 'bg-white dark:bg-neutral-950',
}

export const dynamicSwitch: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^switch-solid(?:-(.+))?$/, ([, c = '#266df0']) => `data-[state=checked]:bg-${c} data-[state=unchecked]:bg-neutral-200 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:(focus-visible:ring-neutral-300 focus-visible:ring-offset-neutral-950 data-[state=unchecked]:bg-neutral-700)`],
  [/^switch-thumb-solid(?:-(.+))?$/, ([, _]) => `bg-white`],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]

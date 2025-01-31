type ButtonPrefix = 'btn'

export const staticBtn: Record<`${ButtonPrefix}-${string}` | ButtonPrefix, string> = {
  'btn': 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-default font-medium transition-colors focus-visible:(outline-none ring-1 ring-neutral-950) disabled:(pointer-events-none opacity-50) [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300',

  'btn-default': 'bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:(bg-neutral-50 text-neutral-900 hover:bg-neutral-50/90)',
  'btn-secondary': 'bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:(bg-#2e2e2e text-neutral-50 hover:bg-#2e2e2e/80)',
  'btn-outline': 'border border-solid border-neutral-200 bg-white shadow-sm hover:(bg-neutral-50 text-neutral-900) dark:(border-neutral-700 bg-neutral-800 hover:bg-neutral-700/20 hover:text-neutral-50)',
  'btn-ghost': 'bg-transparent hover:(bg-neutral-100 text-neutral-900) dark:(hover:bg-neutral-700/40 hover:text-neutral-50)',
  'btn-dashed': 'border border-dashed border-neutral-200 bg-white shadow-sm hover:(bg-neutral-50 text-neutral-900) dark:(border-neutral-700 bg-neutral-800 hover:bg-neutral-700/20 hover:text-neutral-50)',
}

export const dynamicBtn: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^btn-solid(?:-(.+))?$/, ([, c = '#266df0']) => `bg-${c} text-neutral-50 shadow focus:ring-0 hover:bg-${c}/90`],
  [/^btn-colorized-(.*)$/, ([, c]) => `bg-${c}-500 text-neutral-50 shadow-sm hover:bg-${c}-500/90 dark:(bg-${c}-900 text-neutral-50 hover:bg-${c}-900/90)`],
]

export const btn = [
  ...dynamicBtn,
  staticBtn,
]

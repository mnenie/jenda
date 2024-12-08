type SelectPrefix = 'select'

export const staticSelect: Record<`${SelectPrefix}-${string}` | SelectPrefix, string> = {
  'select': '',
  'select-content': 'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-solid border-neutral-200 bg-white text-neutral-950 shadow-md dark:(border-neutral-700/40 bg-neutral-800 text-neutral-50)',
  'select-group': 'p-1 w-full',
  'select-item': 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:(pointer-events-none opacity-50) dark:(focus:bg-neutral-700/40 focus:text-neutral-50)',
  'select-item-indicator': 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
  'select-label': 'px-2 py-1.5 text-sm font-semibold',
  'select-scroll-button': 'flex cursor-default items-center justify-center py-1',
  'select-separator': '-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800',
  'select-trigger': 'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-solid border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white data-[placeholder]:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start dark:(border-neutral-700 ring-offset-neutral-800 data-[placeholder]:text-neutral-400 focus:ring-neutral-300)',
}

export const select = [
  staticSelect,
]

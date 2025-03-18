type InputPrefix = 'input'

export const staticInput: Record<`${InputPrefix}-${string}` | InputPrefix, string> = {
  'input': 'flex h-default w-full rounded-md border border-solid border-neutral-200 bg-transparent px-3 py-1 text-base 2xl:text-sm shadow-sm transition-colors file:(border-0 bg-transparent text-sm font-medium) placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:(cursor-not-allowed opacity-50) dark:(border-neutral-700 placeholder:text-neutral-400 focus-visible:ring-neutral-300)',
  'input-root': 'w-full relative inline-flex items-center',

  'input-form': 'input shadow-none h-9.5 2xl:h-9 focus:ring-0',
  'input-leading': 'absolute inset-y-0 start-0 flex items-center ps-2.5',
  'input-trailing': 'absolute inset-y-0 end-0 flex items-center pe-2.5',
  'input-icon': 'w-4 h-4 dark:text-neutral-200',

  'input-default': '',
  'input-filled': 'bg-neutral-100 border-neutral-100 focus-visible:ring-neutral-200 dark:(bg-neutral-800 border-neutral-800 focus-visible:ring-neutral-700)',
}

export const input = [
  staticInput,
]

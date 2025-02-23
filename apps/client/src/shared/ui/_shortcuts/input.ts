type InputPrefix = 'input'

export const staticInput: Record<`${InputPrefix}-${string}` | InputPrefix, string> = {
  'input': 'flex h-default w-full rounded-md border border-solid border-neutral-200 bg-transparent px-3 py-1 text-base 2xl:text-sm shadow-sm transition-colors file:(border-0 bg-transparent text-sm font-medium) placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:(cursor-not-allowed opacity-50) dark:(border-neutral-700 placeholder:text-neutral-400 focus-visible:ring-neutral-300)',
  'input-form': 'input shadow-none h-9.5 2xl:h-9 focus:ring-0',
}

export const input = [
  staticInput,
]

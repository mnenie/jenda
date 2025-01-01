type CommandPrefix = 'command'

export const staticCommand: Record<`${CommandPrefix}-${string}` | CommandPrefix, string> = {
  'command': 'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-neutral-950 dark:(bg-neutral-800 text-neutral-50)',
  'command-dialog': 'overflow-hidden p-0 shadow-lg',
  'command-empty': 'py-6 text-center text-sm',
  'command-group': 'overflow-hidden p-1 text-neutral-950',
  'command-group-label': 'px-2 py-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400',
  'command-input': 'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-neutral-500 disabled:(cursor-not-allowed opacity-50) dark:placeholder:text-neutral-400',
  'command-item': 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:(bg-neutral-100 text-neutral-900) data-[disabled]:pointer-events-none opacity-50) dark:data-[highlighted]:(bg-neutral-700/40 text-neutral-50)',
  'command-list': 'max-h-[300px] overflow-y-auto overflow-x-hidden',
  'command-separator': '-mx-1 h-px bg-neutral-200 dark:bg-neutral-700/40',
  'command-shortcut': 'ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400',
}

export const command = [
  staticCommand,
]

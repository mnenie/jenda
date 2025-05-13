type ComboboxPrefix = 'combobox'

export const staticCombobox: Record<`${ComboboxPrefix}-${string}` | ComboboxPrefix, string> = {
  'combobox': '',
  'combobox-anchor': 'w-200px',
  'combobox-empty': 'py-6 text-center text-default',
  'combobox-group': 'overflow-y-auto overflow-x-hidden p-1 text-neutral-950',
  'combobox-group-label': 'px-2 py-1.5 text-small font-medium text-neutral-500 dark:text-neutral-400',
  'combobox-input': 'flex h-10 w-full rounded-md bg-transparent py-3 !text-default outline-none placeholder:text-neutral-500 disabled:(cursor-not-allowed opacity-50) dark:placeholder:text-neutral-400',
  'combobox-item': 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-default outline-none data-[highlighted]:(bg-neutral-100 text-neutral-900) data-[disabled]:(pointer-events-none opacity-50) dark:data-[highlighted]:(bg-neutral-700/40 text-neutral-50)',
  'combobox-list': 'z-50 w-200px rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md outline-none dark:(focus:bg-neutral-700/40 focus:text-neutral-50)',
  'combobox-separator': '-mx-1 h-px bg-neutral-200 dark:bg-neutral-700/40',
}

export const combobox = [
  staticCombobox,
]

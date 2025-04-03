type DropdownMenuPrefix = 'dropdown-menu'

export const staticDropdownMenu: Record<`${DropdownMenuPrefix}-${string}` | DropdownMenuPrefix, string> = {
  'dropdown-menu': '',
  'dropdown-menu-content': 'z-998 min-w-32 overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-md dark:(border-neutral-700/40 bg-neutral-800 text-neutral-50)',
  'dropdown-menu-checkbox-item': 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-default outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:(pointer-events-none opacity-50) dark:(focus:bg-neutral-700/40 focus:text-neutral-50)',
  'dropdown-menu-checkbox-item-indicator': 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
  'dropdown-menu-item': 'relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-default outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:(pointer-events-none opacity-50) cursor-pointer  [&>svg]:size-4 [&>svg]:shrink-0 dark:(focus:bg-neutral-700/40 focus:text-neutral-50)',
  'dropdown-menu-label': 'px-2 py-1.5 text-default font-semibold',
  'dropdown-menu-separator': '-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700/40',
  'dropdown-menu-shortcut': 'ml-auto text-xs tracking-widest opacity-60',
  'dropdown-menu-sub-content': 'z-50 min-w-32 overflow-hidden rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-lg dark:(border-neutral-700/40 bg-neutral-800 text-neutral-50)',
  'dropdown-menu-sub-trigger': 'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-default outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:(focus:bg-neutral-700/40 data-[state=open]:bg-neutral-700/40)',
  'dropdown-menu-sub-trigger-icon': 'ml-auto h-4 w-4 shrink-0 text-neutral-500 dark:text-neutral-400',
  'dropdown-menu-trigger': 'outline-none',
  'dropdown-menu-destructive-item': 'hover:!bg-#dc262611 !text-red-500',
}

export const dropdownMenu = [
  staticDropdownMenu,
]

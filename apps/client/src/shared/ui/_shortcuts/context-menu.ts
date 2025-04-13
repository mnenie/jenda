type ContextMenuPrefix = 'context-menu'

export const staticContextMenu: Record<`${ContextMenuPrefix}-${string}` | ContextMenuPrefix, string> = {
  'context-menu': '',
  'context-menu-content': 'z-999 min-w-32 rounded-md border border-neutral-200 bg-white p-1 text-neutral-950 shadow-md dark:(border-neutral-700/40 bg-neutral-800 text-neutral-50)',
  'context-menu-item': 'relative flex gap-1.5 cursor-default select-none items-center rounded-sm px-2 py-1.5 text-default outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:(pointer-events-none opacity-50) dark:(focus:bg-neutral-700/40 focus:text-neutral-50)',
  'context-menu-label': 'px-2 py-1.5 text-sm font-semibold text-neutral-950 dark:text-neutral-100',
  'context-menu-separator': '-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-700/40',
  'context-menu-shortcut': 'ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400',
}

export const contextMenu = [
  staticContextMenu,
]

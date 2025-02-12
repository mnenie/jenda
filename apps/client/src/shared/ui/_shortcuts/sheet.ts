type SheetPrefix = 'sheet'

export const staticSheet: Record<`${SheetPrefix}-${string}` | SheetPrefix, string> = {
  'sheet': 'fixed z-99 gap-4 bg-white p-6 focus:(outline-none ring-0) shadow-none transition ease-in-out dark:bg-neutral-800',
  'sheet-overlay': 'fixed inset-0 z-50 bg-black/80',
  'sheet-description': 'text-sm text-neutral-500 dark:text-neutral-400',
  'sheet-title': 'text-xl 2xl:text-lg font-semibold text-neutral-950 dark:text-neutral-50',
  'sheet-footer': 'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
  'sheet-header': 'flex flex-col gap-y-2 text-center sm:text-left',

  'sheet-right': 'inset-y-0 right-0 h-full w-3/4 border-l border-layout',
  'sheet-left': 'inset-y-0 left-0 h-full w-3/4 border-r border-layout',
  'sheet-bottom': 'inset-x-0 bottom-0 border-t border-layout',
  'sheet-top': 'inset-x-0 top-0 border-b border-layout',
}

export const sheet = [
  staticSheet,
]

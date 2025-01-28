type TablePrefix = 'table'

export const staticTable: Record<`${TablePrefix}-${string}` | TablePrefix, string> = {
  'table': 'w-full caption-bottom text-default overflow-y-auto',
  'table-wrapper': 'relative w-full overflow-x-hidden overflow-y-auto border border-neutral-100 dark:border-neutral-700/50 max-h-[calc(100dvh-160px)] rounded-md',
  'table-body': '[&_tr:last-child]:border-0',
  'table-row': 'border-b border-neutral-100 dark:border-neutral-700/50 transition-colors hover:bg-neutral-50/60 dark:hover:bg-neutral-700/20 data-[state=selected]:!bg-blue-100 dark:data-[state=selected]:!bg-blue-900 cursor-pointer',
  'table-cell': 'p-2 border-r overflow-x-auto first:pl-12px first:border-none last:border-none border-neutral-100  dark:border-neutral-700/50 overflow-hidden text-ellipsis whitespace-nowrap px-8px h-12 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:flex [&>[role=checkbox]]:items-center dark:text-neutral-100',
  'table-head': 'h-12 px-2 first:pl-12px border-r first:border-none last:border-none border-neutral-100 dark:border-neutral-700/50 text-ellipsis text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:flex [&>[role=checkbox]]:items-center',
  'table-header': 'sticky top-0 z-33 border-b bg-neutral-50 dark:bg-#2e2e2e',
  'table-empty': 'flex items-center justify-center text-default py-8px text-neutral-500 dark:text-neutral-400',
  'table-empty-cell': 'whitespace-nowrap align-middle text-neutral-950 dark:text-neutral-100',
  'table-caption': 'mt-4 text-default text-neutral-500 dark:text-neutral-400',
}

export const table = [
  staticTable,
]

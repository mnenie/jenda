type TablePrefix = 'table'

export const staticTable: Record<`${TablePrefix}-${string}` | TablePrefix, string> = {
  'table': 'w-full caption-bottom text-13px 2xl:text-sm overflow-y-auto',
  'table-wrapper': 'relative w-full overflow-x-hidden overflow-y-auto border border-neutral-100 dark:border-neutral-700/50 max-h-[calc(100dvh-160px)] rounded-md',
  'table-body': '[&_tr:last-child]:border-0',
  'table-row': 'border-b border-neutral-100 dark:border-neutral-700/50 transition-colors data-[state=selected]:bg-blue-100 dark:data-[state=selected]:bg-blue-900 cursor-pointer',
  'table-cell': 'p-2 border-r first:border-none last:border-none border-neutral-100  dark:border-neutral-700/50 overflow-hidden text-ellipsis whitespace-nowrap px-8px h-12 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:flex [&>[role=checkbox]]:items-center dark:text-neutral-100',
  'table-head': 'h-12 px-8px border-r first:border-none last:border-none border-neutral-100 dark:border-neutral-700/50 text-ellipsis text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:flex [&>[role=checkbox]]:items-center',
  'table-header': 'sticky top-0 z-33 border-b bg-neutral-50 dark:bg-#2e2e2e',
  'table-empty': 'flex items-center justify-center text-sm text-neutral-500 dark:text-neutral-400',
  'table-empty-cell': 'whitespace-nowrap align-middle text-sm text-neutral-950 dark:text-neutral-100',
  'table-caption': 'mt-4 text-sm text-neutral-500 dark:text-neutral-400',
}

export const table = [
  staticTable,
]

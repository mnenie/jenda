type PaginationPrefix = 'pagination'

export const staticPagination: Record<`${PaginationPrefix}-${string}` | PaginationPrefix, string> = {
  'pagination': '',
  'pagination-ellipsis': 'w-9 h-9 flex items-center justify-center',
  'pagination-item': 'w-9 h-9 p-0',
}

export const pagination = [
  staticPagination,
]

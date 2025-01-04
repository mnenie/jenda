import type { ColumnDef, GroupColumnDef } from '@tanstack/vue-table'
import type { HTMLAttributes } from 'vue'

export interface TableProps<TData, TValue> extends TableRootProps {
  data: TData[]
  columns: ColumnDef<TData, TValue>[] | GroupColumnDef<TData, TValue>[]
  rowId?: string
  autoResetAll?: boolean
  enableRowSelection?: boolean
  enableMultiRowSelection?: boolean
  enableSubRowSelection?: boolean
  enableColumnFilters?: boolean
  enableSorting?: boolean
  enableMultiSort?: boolean
  enableMultiRemove?: boolean
  enableSortingRemoval?: boolean
  manualSorting?: boolean
  maxMultiSortColCount?: number
  manualPagination?: boolean
  pageCount?: number
  rowCount?: number
  autoResetPageIndex?: boolean
  sortingFns?: Record<string, (a: any, b: any) => number>
  sortDescFirst?: boolean
  isMultiSortEvent?: (e: unknown) => boolean

  _tableHead?: TableHeadProps
  _tableHeader?: TableHeaderProps
  _tableBody?: TableBodyProps
  _tableRow?: TableRowProps
  _tableCell?: TableCellProps
  _tableEmpty?: TableEmptyProps
}

export interface TableBodyProps {
  class?: HTMLAttributes['class']
}

export interface TableRootProps {
  class?: HTMLAttributes['class']
}

export interface TableHeadProps {
  class?: HTMLAttributes['class']
  dataPinned?: 'left' | 'right' | false
}

export interface TableHeaderProps {
  class?: HTMLAttributes['class']
}

export interface TableRowProps {
  class?: HTMLAttributes['class']
}

export interface TableCellProps {
  class?: HTMLAttributes['class']
  dataPinned?: 'left' | 'right' | false
}

export interface TableEmptyProps {
  class?: HTMLAttributes['class']
  colspan?: number
  _tableCell?: TableCellProps
  _tableRow?: TableRowProps
}

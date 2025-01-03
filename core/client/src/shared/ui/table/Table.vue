<script setup lang="ts" generic="TData, TValue">
import { computed, h } from 'vue'
import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { Icon } from '@iconify/vue'
import { UiCheckbox } from '../checkbox'
import { UiBadge } from '../badge'
import { UiTableBody, UiTableCell, UiTableEmpty, UiTableHead, UiTableHeader, UiTableRoot, UiTableRow } from '.'
import type {
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ExpandedState,
  GroupingState,
  PaginationState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'
import type { TableProps } from './types'
import { valueUpdater } from '@/shared/libs/shadcn/utils'

const {
  enableMultiRowSelection = true,
  ...props
} = defineProps <TableProps<TData, TValue>>()

const emit = defineEmits(['select', 'selectAll', 'expand'])

const slots = defineSlots()

const rowSelection = defineModel<Record<string, boolean>>('modelValue')
const sorting = defineModel<SortingState>('sorting')
const columnVisibility = defineModel<VisibilityState>('columnVisibility')
const columnFilters = defineModel<ColumnFiltersState>('columnFilters')
const globalFilter = defineModel<string>('globalFilter')
const columnOrder = defineModel<ColumnOrderState>('columnOrder')
const columnPinning = defineModel<ColumnPinningState>('columnPinning')
const expanded = defineModel<ExpandedState>('expanded')
const grouping = defineModel<GroupingState>('grouping')
const pagination = defineModel<PaginationState>('pagination', {
  default: () => ({
    pageIndex: 0,
    pageSize: 15,
  }),
})

const columnsWithMisc = computed(() => {
  let data = []
  data = props.enableRowSelection
    ? [
        {
          accessorKey: 'selection',
          header: enableMultiRowSelection
            ? ({ table }: any) => h(UiCheckbox, {
                'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
                'onUpdate:checked': (value: boolean) => {
                  table.toggleAllPageRowsSelected(!!value)
                  emit('selectAll', table.getRowModel().rows)
                },
                'areaLabel': 'Select all rows',
              })
            : '',
          cell: ({ row }: any) => h(UiCheckbox, {
            'checked': row.getIsSelected() ?? false,
            'onUpdate:checked': (value: boolean) => {
              row.toggleSelected(!!value)
              emit('select', row)
            },
            'areaLabel': 'Select row',
          }),
          enableSorting: false,
          enableHiding: false,
        },
        ...props.columns,
      ]
    : props.columns

  return data
})

const table = useVueTable({
  get data() {
    return props.data ?? []
  },
  get columns() {
    return columnsWithMisc.value ?? []
  },
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get globalFilter() { return globalFilter.value },
    get rowSelection() { return rowSelection.value },
    get columnVisibility() { return columnVisibility.value },
    get pagination() { return pagination.value },
    get columnOrder() { return columnOrder.value },
    get columnPinning() { return columnPinning.value },
    get expanded() { return expanded.value },
    get grouping() { return grouping.value },
  },

  enableMultiRowSelection,
  enableSubRowSelection: props.enableSubRowSelection,
  autoResetAll: props.autoResetAll,
  enableRowSelection: props.enableRowSelection,
  enableColumnFilters: props.enableColumnFilters,
  manualPagination: props.manualPagination,
  manualSorting: props.manualSorting,
  pageCount: props.pageCount,
  rowCount: props.rowCount,
  autoResetPageIndex: props.autoResetPageIndex,
  enableSorting: props.enableSorting,
  enableSortingRemoval: props.enableSortingRemoval,
  enableMultiSort: props.enableMultiSort,
  enableMultiRemove: props.enableMultiRemove,
  maxMultiSortColCount: props.maxMultiSortColCount,
  sortingFns: props.sortingFns,
  isMultiSortEvent: props.isMultiSortEvent,

  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getRowId: (row: any) => props.rowId ? row[props.rowId] : row.id,
  getExpandedRowModel: getExpandedRowModel(),

  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
  onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
  onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  onGlobalFilterChange: updaterOrValue => valueUpdater(updaterOrValue, globalFilter),
  onPaginationChange: updaterOrValue => valueUpdater(updaterOrValue, pagination),
  onColumnOrderChange: updaterOrValue => valueUpdater(updaterOrValue, columnOrder),
  onColumnPinningChange: updaterOrValue => valueUpdater(updaterOrValue, columnPinning),
  onExpandedChange: updaterOrValue => valueUpdater(updaterOrValue, expanded),
  onGroupingChange: updaterOrValue => valueUpdater(updaterOrValue, grouping),
})

defineExpose({
  ...table,
})
</script>

<template>
  <UiTableRoot
    :class="props.class"
  >
    <UiTableHeader
      v-bind="props._tableHeader"
    >
      <slot name="header" :table="table">
        <UiTableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
          v-bind="props._tableRow"
        >
          <!-- headers -->
          <UiTableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colspan="header.colSpan"
            :data-pinned="header.column.getIsPinned()"
            v-bind="{ ...props._tableHead, ...header.column.columnDef.meta }"
            :class="(header.column.columnDef.meta as any)?._tableHead"
          >
            <div
              class="flex items-center space-x-auto justify-between w-full"
            >
              <div
                class="flex items-center gap-1.5 whitespace-nowrap w-full"
              >
                <Icon
                  v-if="header.column.columnDef.meta"
                  :icon="(header.column.columnDef.meta as any)?.icon"
                  class="w-4 h-4"
                />
                <slot
                  :name="`${header.id}-header`"
                  :column="header.column"
                >
                  <FlexRender
                    v-if="!header.isPlaceholder"
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                </slot>
              </div>
              <UiBadge
                v-if="header.column.columnDef.meta && (header.column.columnDef.meta as any).badge"
                variant="soft"
                class="px-1 py-px text-xs badge-soft-purple"
              >
                {{ (header.column.columnDef.meta as any).badge }}
              </UiBadge>
            </div>
          </UiTableHead>
        </UiTableRow>
      </slot>
    </UiTableHeader>
    <UiTableBody class="overflow-auto">
      <slot name="body" :table="table">
        <template v-if="table.getRowModel().rows?.length">
          <template
            v-for="row in table.getRowModel().rows"
            :key="row.id"
          >
            <UiTableRow
              :data-state="row.getIsSelected() && 'selected'"
              v-bind="props._tableRow"
            >
              <slot
                name="row"
                :row="row"
              >
                <UiTableCell
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                  :data-pinned="cell.column.getIsPinned()"
                  v-bind="{ ...props._tableCell, ...cell.column.columnDef.meta }"
                  class="whitespace-nowrap"
                  :class="(cell.column.columnDef.meta as any)?._tableCell"
                >
                  <slot
                    :name="`${cell.column.id}-cell`"
                    :cell="cell"
                  >
                    <FlexRender
                      :render="cell.column.columnDef.cell"
                      :props="cell.getContext()"
                    />
                  </slot>
                </UiTableCell>
              </slot>
            </UiTableRow>
          </template>
        </template>
        <UiTableEmpty
          v-else
          :colspan="table.getAllLeafColumns().length"
          v-bind="props._tableEmpty"
        >
          <slot name="empty">
            Таблица пуста
          </slot>
        </UiTableEmpty>
      </slot>
    </UiTableBody>
  </UiTableRoot>
</template>

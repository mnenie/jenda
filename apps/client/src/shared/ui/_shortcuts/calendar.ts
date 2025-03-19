type CalendarPrefix = 'calendar'

export const staticColendar: Record<`${CalendarPrefix}-${string}` | CalendarPrefix, string> = {
  'calendar': 'p-3',
  'calendar-cell': 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-neutral-100 [&:has([data-selected][data-outside-view])]:bg-neutral-100/50 dark:[&:has([data-selected])]:bg-neutral-800 dark:[&:has([data-selected][data-outside-view])]:bg-neutral-800/50',
  'calendar-grid-container': 'flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0',

  'calendar-cell-trigger': 'h-8 w-8 p-0 font-normal',
  'calendar-cell-trigger-disabled': 'data-[disabled]:text-neutral-500 data-[disabled]:opacity-50 dark:data-[disabled]:text-neutral-400',
  'calendar-cell-trigger-unavailable': 'data-[unavailable]:text-neutral-50 data-[unavailable]:line-through dark:data-[unavailable]:text-neutral-50',
  'calendar-cell-trigger-outside-view': 'data-[outside-view]:text-neutral-500 data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-neutral-100/50 [&[data-outside-view][data-selected]]:text-neutral-500 [&[data-outside-view][data-selected]]:opacity-30 dark:data-[outside-view]:text-neutral-400 dark:[&[data-outside-view][data-selected]]:bg-neutral-800/50 dark:[&[data-outside-view][data-selected]]:text-neutral-400',

  'calendar-grid': 'w-full border-collapse space-y-1',
  'calendar-grid-row': 'flex',
  'calendar-grid-row-body': 'mt-2 w-full',
  'calendar-head-cell': 'w-8 rounded-md text-[0.8rem] font-normal text-neutral-500 dark:text-neutral-400',
  'calendar-header': 'relative flex w-full items-center justify-between pt-1',
  'calendar-heading': 'text-default fw420',
  'calendar-button': 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
  'calendar-button-icon': 'w-4 h-4',
}

export const calendar = [
  staticColendar,
]

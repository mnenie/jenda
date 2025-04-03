type PickerPrefix = 'picker'

export const staticPicker: Record<`${PickerPrefix}-${string}` | PickerPrefix, string> = {
  'picker': 'flex flex-wrap gap-1 mt-0',
  'picker-icon': 'h-3.5 w-3.5 rounded object-cover transition-all mr-px cursor-pointer text-neutral-800 dark:text-neutral-100',
  'picker-input': 'col-span-2 !text-13px 2xl:!text-sm h-default mt-4 focus:ring-0',
  'picker-tabs': 'w-full',
  'picker-item': 'rounded-md h-6 w-6 2xl:(h-5.5 w-5.5) cursor-pointer active:scale-105',
}

export const picker = [
  staticPicker,
]

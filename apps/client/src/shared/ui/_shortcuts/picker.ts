type PickerPrefix = 'picker'

export const staticPicker: Record<`${PickerPrefix}-${string}` | PickerPrefix, string> = {
  'picker': 'flex flex-wrap gap-1 mt-0',
  'picker-icon': 'h-3.5 w-3.5 rounded object-cover transition-all mr-px cursor-pointer text-neutral-800 dark:text-neutral-100',
  'picker-input': 'col-span-2 h-8 mt-4 focus:ring-0',
  'picker-tabs': 'w-full',
  'picker-item': 'rounded-md h-6 w-6 cursor-pointer active:scale-105',
}

export const picker = [
  staticPicker,
]

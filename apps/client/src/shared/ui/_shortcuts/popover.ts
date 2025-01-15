type PopoverPrefix = 'popover'

export const staticPopover: Record<`${PopoverPrefix}-${string}` | PopoverPrefix, string> = {
  'popover': '',
  'popover-content': 'z-1001 w-72 rounded-md border border-neutral-200 bg-white p-2 px-3 text-neutral-950 shadow outline-none dark:(border-neutral-700 bg-neutral-800 text-neutral-50)',
}

export const popover = [
  staticPopover,
]

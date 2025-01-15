type PinInputPrefix = 'pin-input'

export const staticPinInput: Record<`${PinInputPrefix}-${string}` | PinInputPrefix, string> = {
  'pin-input': 'flex gap-2 items-center',
  'pin-input-group': 'flex items-center',
  'pin-input-input': 'relative placeholder:(absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2) align-middle text-center focus:(outline-none ring-2 ring-neutral-950 relative z-10) flex h-9 w-9 items-center justify-center border-y border-r border-neutral-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:(focus:ring-neutral-300 border-neutral-800)',
}

export const pinInput = [
  staticPinInput,
]

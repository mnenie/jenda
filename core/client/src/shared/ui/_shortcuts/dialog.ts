type DialogPrefix = 'dialog'

export const staticDialog: Record<`${DialogPrefix}-${string}` | DialogPrefix, string> = {
  'dialog': '',
  'dialog-overlay': 'fixed inset-0 z-999 bg-black/60',
  'dialog-content': 'fixed left-1/2 top-1/2 z-1000 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg dark:(border-neutral-800 bg-neutral-800)',
  'dialog-close': 'absolute right-4 top-4 w-4 h-4 flex items-center justify-center rounded-sm opacity-70 ring-offset-0 transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 disabled:pointer-events-none dark:(ring-offset-0 focus:ring-0)',
  'dialog-title': 'text-lg font-semibold leading-none tracking-tight',
  'dialog-description': 'text-sm text-neutral-500 dark:text-neutral-400',
  'dialog-footer': 'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
  'dialog-header': 'flex flex-col gap-y-1.5 text-center sm:text-left',
  'dialog-scroll-overlay': 'dialog-overlay grid place-items-center overflow-y-auto',
  'dialog-scroll-content': 'relative z-50 grid w-full max-w-lg my-8 gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:(border-neutral-800 bg-neutral-800)',
  'dialog-scroll-close': 'fixed inset-0 z-50 cursor-pointer opacity-0',
}

export const dialog = [
  staticDialog,
]

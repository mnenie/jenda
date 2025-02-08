import { cva, type VariantProps } from 'class-variance-authority'

export { default as UiSheet } from './UiSheet.vue'
export { default as UiSheetClose } from './UiSheetClose.vue'
export { default as UiSheetContent } from './UiSheetContent.vue'
export { default as UiSheetDescription } from './UiSheetDescription.vue'
export { default as UiSheetFooter } from './UiSheetFooter.vue'
export { default as UiSheetHeader } from './UiSheetHeader.vue'
export { default as UiSheetTitle } from './UiSheetTitle.vue'
export { default as UiSheetTrigger } from './UiSheetTrigger.vue'

export const sheetVariants = cva(
  'fixed z-99 gap-4 bg-white p-6 focus:(outline-none ring-0) shadow-none transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-neutral-800',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r border-layout data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
            'inset-y-0 right-0 h-full w-3/4 border-l border-layout data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

export type SheetVariants = VariantProps<typeof sheetVariants>

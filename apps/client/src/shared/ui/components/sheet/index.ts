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
  'sheet data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'sheet-top data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
            'sheet-bottom data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'sheet-left data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
            'sheet-right data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

export type SheetVariants = VariantProps<typeof sheetVariants>

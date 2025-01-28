import { cva, type VariantProps } from 'class-variance-authority'

export { default as UiAlert } from './UiAlert.vue'

export const alertVariants = cva('alert', {
  variants: {
    variant: {
      default: 'alert-default',
      success: 'alert-success',
      warning: 'alert-warning',
      important: 'alert-important',
      info: 'alert-info',
    },
  },
})

export type AlertVariants = VariantProps<typeof alertVariants>

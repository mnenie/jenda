import { cva, type VariantProps } from 'class-variance-authority'

export { default as UiInput } from './UiInput.vue'

export const inputVariants = cva('input', {
  variants: {
    variant: {
      default: 'input-default',
      filled: 'input-filled',
    },
  },
})

export type InputVariants = VariantProps<typeof inputVariants>

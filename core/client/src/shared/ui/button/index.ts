import { cva, type VariantProps } from 'class-variance-authority'

export { default as UiButton } from './UiButton.vue'

export const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: 'btn-default',
      solid: 'btn-solid',
      destructive: 'btn-colorized-red',
      success: 'btn-colorized-green',
      outline: 'btn-outline',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost',
      dashed: 'btn-dashed',
    },
    size: {
      default: 'h-34px px-4 py-2',
      xs: 'h-7 rounded px-2 text-xs',
      sm: 'h-8 rounded-md px-3',
      lg: 'h-38px rounded-md px-8',
    },
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

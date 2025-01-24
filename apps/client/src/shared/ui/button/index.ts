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
      default: 'h-9 2xl:h-8 rounded-md px-2',
      xs: 'h-8 rounded px-2 text-xs rounded-lg',
      md: 'h-9.5 2xl:h-9 rounded-md px-2.5 py-1.5',
      sm: 'h-9 2xl:h-8 rounded-md px-3',
      lg: 'h-9 sm:h-10 2xl:h-9 px-4 py-2',
    },
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

import { cva, type VariantProps } from 'class-variance-authority'

export { default as UiSwitch } from './UiSwitch.vue'

export const switchVariants = cva('', {
  variants: {
    variant: {
      default: 'switch-default',
      solid: 'switch-solid',
    },
    thumb: {
      default: 'switch-thumb-default',
      solid: 'switch-thumb-solid',
    },
  },
})

export type SwitchVariants = VariantProps<typeof switchVariants>

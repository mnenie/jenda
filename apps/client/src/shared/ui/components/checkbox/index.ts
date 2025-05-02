import { cva, type VariantProps } from 'class-variance-authority'

export { default as UiCheckbox } from './UiCheckbox.vue'

export const checkboxVariants = cva('checkbox', {
  variants: {
    variant: {
      default: 'checkbox-default',
      solid: 'checkbox-solid',
    },
  },
})

export type CheckboxVariants = VariantProps<typeof checkboxVariants>

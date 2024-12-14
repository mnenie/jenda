import { cva, type VariantProps } from 'class-variance-authority'

export { default as UiBadge } from './UiBadge.vue'

export const badgeVariants = cva('badge', {
  variants: {
    variant: {
      default: 'badge-default',
      secondary: 'badge-secondary',
      destructive: 'badge-colorized-red',
      success: 'badge-colorized-green',
      solid: 'badge-solid',
      outline: 'badge-outline',
      soft: 'badge-soft',
    },
  },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>

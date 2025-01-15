<script setup lang="ts">
import { type BadgeVariants, badgeVariants } from '.'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const { variant = 'default', class: badgeClass } = defineProps<{
  variant?: BadgeVariants['variant']
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), badgeClass)">
    <slot />
  </div>
</template>

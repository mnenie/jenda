<script setup lang="ts">
import { type BadgeVariants, badgeVariants } from '.'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const { variant = 'default', class: badgeClass } = defineProps<{
  variant?: BadgeVariants['variant']
  class?: HTMLAttributes['class']
  closable?: boolean
  closeIcon?: HTMLAttributes['class']
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), badgeClass)">
    <slot />
    <div
      v-if="closable"
      i-lucide-x
      class="ml-0.5 flex items-center w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 cursor-pointer"
      :style="{ color: closeIcon }"
      @click="emit('close')"
    />
  </div>
</template>

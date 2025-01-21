<script setup lang="ts">
import { Icon, type IconifyIcon } from '@iconify/vue'
import type { ClassValue } from 'clsx'
import { cn } from '@/shared/libs/shadcn/utils'
import { UiButton } from '@/shared/ui'

defineProps<{
  isActive: boolean
  icon: IconifyIcon | string
  iconClass?: ClassValue
}>()
</script>

<template>
  <UiButton
    variant="ghost"
    size="sm"
    :class="cn(
      'relative !h-7 py-0 px-1.5',
      isActive
        ? ' !text-blue-600 dark:!text-blue-500'
        : 'text-neutral-950 dark:text-neutral-400',
    )"
  >
    <slot name="badge" />
    <Icon
      :icon="icon"
      :class="iconClass"
    />
  </UiButton>
</template>

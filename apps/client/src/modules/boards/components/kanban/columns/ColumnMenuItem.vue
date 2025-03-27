<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { cn } from '@/shared/libs/shadcn/utils'
import { UiDropdownMenuItem } from '@/shared/ui'

defineProps<{
  prefix: string
  icon: string
  class?: string
}>()

defineEmits<{
  (e: 'select', prefix: string): void
}>()
</script>

<template>
  <UiDropdownMenuItem
    :class="cn(
      'cursor-pointer rounded-md',
      { 'dropdown-menu-destructive-item': prefix === 'delete' },
    )"
    @select="$emit('select', prefix)"
  >
    <Icon
      :icon
      :class="cn(
        'min-w-4.4 min-h-4.4 text-neutral-500',
        { 'dropdown-menu-destructive-item': prefix === 'delete' },
      )"
    />
    <span>{{ $t(`kanban.column.menu.${prefix}`) }}</span>
  </UiDropdownMenuItem>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon, type IconifyIcon } from '@iconify/vue'
import { cn } from '@/shared/libs/shadcn/utils'
import { UiDropdownMenuItem } from '@/shared/ui'

const props = defineProps<{
  prefix: string
  icon: IconifyIcon | string
  class?: string
}>()

defineEmits<{
  (e: 'select', event: string): void
}>()

const prefixDdEvent = computed(() => props.prefix.split('.').pop())
</script>

<template>
  <UiDropdownMenuItem
    :class="cn(
      'cursor-pointer rounded-md',
      { 'dropdown-menu-destructive-item': prefixDdEvent === 'delete' },
      props.class,
    )"
    @select="$emit('select', prefixDdEvent!)"
  >
    <Icon
      :icon
      :class="cn(
        'min-w-4.4 min-h-4.4 text-neutral-500',
        { 'dropdown-menu-destructive-item': prefixDdEvent === 'delete' },
      )"
    />
    <span>{{ $t(prefix) }}</span>
  </UiDropdownMenuItem>
</template>

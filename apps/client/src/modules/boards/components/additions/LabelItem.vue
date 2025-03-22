<script setup lang="ts">
import { useDark } from '@vueuse/core'
import type { Label } from '../../types'
import { formatLabelColor } from '@/shared/helpers/helperColor'
import { UiBadge } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

defineProps<{
  label: Label
  removable?: boolean
}>()

const emit = defineEmits<{
  (e: 'remove'): void
}>()

const isDark = useDark()
</script>

<template>
  <UiBadge
    :closable="removable"
    :close-icon="formatLabelColor(label.color, isDark ? 10 : 100) || ''"
    variant="soft"
    :class="cn(
      'shadow-none rounded-lg !text-12px 2xl:!text-xs fw450 py-0 px-1 bg-neutral-100 text-neutral-800 dark:(bg-neutral-700/80 text-neutral-100)',
      { 'flex items-center gap-1 !max-w-full': removable },
    )"
    :style="{
      background: label.color ? label.color.startsWith('#') ? `${label.color}33` : label.color : '',
      color: formatLabelColor(label.color, isDark ? 10 : 100) || '',
      border: label.color ? `1px solid ${label.color}44 !important` : '1px solid rgba(128, 128, 128, 0.3) !important',
    }"
    @close="emit('remove')"
  >
    <span :class="!removable && 'truncate'">{{ label.name }}</span>
  </UiBadge>
</template>

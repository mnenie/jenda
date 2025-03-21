<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Icon } from '@iconify/vue'
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
  >
    <span :class="cn(removable ? '' : 'truncate')">{{ label.name }}</span>
    <Icon
      v-if="removable"
      icon="hugeicons:cancel-01"
      class="!w-3 !h-3 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer"
      @click="emit('remove')"
    />
  </UiBadge>
</template>

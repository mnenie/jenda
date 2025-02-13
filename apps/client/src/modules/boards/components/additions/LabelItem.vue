<script setup lang="ts">
import { useDark } from '@vueuse/core'
import type { Label } from '../../types'
import { formatLabelColor } from '@/shared/helpers/helperColor'
import { UiBadge } from '@/shared/ui'

defineProps<{
  label: Label
}>()

const isDark = useDark()
</script>

<template>
  <UiBadge
    variant="soft"
    class="shadow-none rounded-lg !text-12px 2xl:!text-xs fw450 py-0 px-1 bg-neutral-100 text-neutral-800 dark:(bg-neutral-700/80 text-neutral-100)"
    :style="{
      background: label.color ? label.color.startsWith('#') ? `${label.color}33` : label.color : '',
      color: formatLabelColor(label.color, isDark ? 10 : 100) || '',
      border: label.color ? `1px solid ${label.color}44 !important` : '1px solid rgba(128, 128, 128, 0.3) !important',
    }"
  >
    <span class="truncate">{{ label.name }}</span>
  </UiBadge>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LabelItem from './LabelItem.vue'
import type { HTMLAttributes } from 'vue'
import type { Label } from '../../types'
import { UiBadge } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const { max = 3, labels, ...props } = defineProps<{
  labels: Label[]
  max?: number
  class?: HTMLAttributes['class']
  labelClass?: HTMLAttributes['class']
}>()

const visibleLabels = computed(() => labels.slice(0, max))
const remainingLabels = computed(() => Math.max(labels.length - max, 0))
</script>

<template>
  <div :class="cn('flex items-center gap-1 w-full', props.class)">
    <LabelItem
      v-for="label in visibleLabels"
      :key="label.name"
      :label="label"
      :class="cn('max-w-60px truncate', props.labelClass)"
    />
    <UiBadge v-if="remainingLabels > 0" variant="soft" class="shadow-none rounded-lg !text-12px 2xl:!text-xs fw450 py-0 px-1 bg-neutral-100 text-neutral-800 dark:(bg-neutral-700/80 text-neutral-100)">
      +{{ remainingLabels }}
    </UiBadge>
  </div>
</template>

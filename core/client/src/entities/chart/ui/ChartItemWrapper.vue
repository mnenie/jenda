<script setup lang="ts">
import type { Chart } from '../model'
import { UiBadge } from '@/shared/ui'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  chart: Chart
  width: string
  height?: string
}>()
</script>

<template>
  <div
    class="flex flex-col items-center border border-solid border-neutral-200 p-3 rounded-md bg-white gap-2.5 h-fit w-full shadow-sm grow
    dark:border-neutral-700 dark:bg-neutral-700/40"
    :style="{ maxWidth: width, height }"
  >
    <div class="flex items-center justify-evenly w-full mb-2">
      <div class="flex items-center gap-2.5 w-full">
        <p class="text-sm">
          {{ $t(`analytics.charts.${chart.key}.name`) }}
        </p>
        <UiBadge variant="secondary" class="text-neutral-600 bg-neutral-100">
          {{ chart.section }}
        </UiBadge>
      </div>
      <div i-lucide-ellipsis-vertical class="cursor-pointer text-neutral-500 dark:text-neutral-300" />
    </div>
    <div class="flex items-center justify-center w-full h-full">
      <slot />
    </div>
    <span v-if="chart.key === 'users'" class="text-xs dark:text-neutral-200">
      {{ $t(`analytics.charts.${chart.key}.description`) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import SubscribePlan from './SubscribePlan.vue'
import { useExpandedContext } from '@/shared/composables/expanded'
import { UiBadge } from '@/shared/ui'

defineProps<{
  isShowPlan: boolean
}>()

const { isExpanded } = useExpandedContext()
</script>

<template>
  <div
    v-if="isShowPlan"
    class="relative p-1 px-1.5 bg-white border border-solid border-neutral-200 rounded-lg shadow-sm
    dark:bg-neutral-700/10 dark:border-neutral-800"
  >
    <div class="flex gap-1.5 w-full justify-between items-center">
      <div class="flex items-center gap-1">
        <UiBadge variant="soft" class="rounded px-1.5 py-px text-small">
          5
        </UiBadge>
        <span class="text-default text-neutral-800 dark:text-neutral-300 whitespace-nowrap">
          {{ $t('sidebar.plan.description') }}
        </span>
      </div>
      <SubscribePlan />
    </div>
  </div>
  <div
    v-else
    class="relative p-4.5px 2xl:pt-4px 2xl:pb-4px px-1 rounded-lg"
    :class="!isExpanded && 'cursor-pointer'"
  >
    <span
      v-tooltip="{
        content: $t('sidebar.plan.tooltip'),
        triggers: ['hover'],
        placement: 'right',
      }"
      class="absolute top--2px 2xl:top-1px right--1px text-blue-500 cursor-help"
    >
      *
    </span>
    <div class="flex gap-1.5 w-full justify-center items-center">
      <div class="flex flex-col items-center h-7">
        <UiBadge variant="outline" class="rounded px-1 py-1 text-xs 2xl:text-10px bg-white dark:bg-neutral-700/10">
          5/10
        </UiBadge>
      </div>
    </div>
  </div>
</template>

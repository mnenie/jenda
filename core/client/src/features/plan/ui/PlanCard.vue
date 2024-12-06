<script setup lang="ts">
import { UiBadge, UiButton } from '@/shared/ui'
import { createReusableTemplate, refDebounced } from '@vueuse/core'
import { computed, toRef } from 'vue'

const props = defineProps<{
  isExpanded: boolean
}>()

const isExpandedRef = toRef(props, 'isExpanded')

const debounced = refDebounced(isExpandedRef, 130)

const isShowPlan = computed((): boolean => {
  return isExpandedRef.value ? debounced.value : false
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ twClass, position }">
    <span
      v-tooltip="{
        content: $t('sidebar.plan.tooltip'),
        triggers: ['hover'],
        placement: position,
      }"
      :class="twClass"
    >
      *
    </span>
  </DefineTemplate>
  <div
    v-if="isShowPlan"
    class="relative p-3 bg-neutral-100 border border-solid border-neutral-200 rounded-md
    dark:bg-neutral-700/10 dark:border-neutral-700"
  >
    <div class="flex flex-col gap-1.5">
      <p class="text-sm !fw500">
        {{ $t('sidebar.plan.title') }}
        <ReuseTemplate position="top" tw-class="text-blue-500 cursor-help" />
      </p>
      <span class="text-xs text-neutral-700 dark:text-neutral-300"> {{ $t('sidebar.plan.description') }}</span>
      <UiButton size="sm" variant="outline" class="text-xs mt-1">
        {{ $t('sidebar.plan.btn') }}
      </UiButton>
    </div>
  </div>
  <div v-else class="relative w-full flex flex-col items-center">
    <ReuseTemplate position="right" tw-class="absolute top--6px right--4px text-blue-500 cursor-help" />

    <UiBadge variant="outline" class="w-10">
      <div class="flex items-center gap-0.5">
        <div i-lucide-stars />
        <span class="!text-10px text-neutral-800 !fw500 dark:text-neutral-300">1/3</span>
      </div>
    </UiBadge>
  </div>
</template>

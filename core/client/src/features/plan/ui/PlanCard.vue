<script setup lang="ts">
import { UiBadge, UiButton } from '@/shared/ui'
import { createReusableTemplate, refDebounced } from '@vueuse/core'
import { computed, toRef } from 'vue'

const props = defineProps<{
  isExpanded: boolean
}>()

const isExpandedRef = toRef(props, 'isExpanded')

const debounced = refDebounced(isExpandedRef, 20)

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
  <div>
    <UiButton
      variant="ghost"
      class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease justify-between mb-1"
      :class="[isExpanded ? 'justify-between' : 'justify-center']"
      :style="{ padding: !isExpanded ? '0px' : '' }"
    >
      <div class="flex items-center gap-2">
        <div i-hugeicons-mortarboard-02 class="text-17px text-neutral-800 dark:text-neutral-300" />
        <span v-show="isExpanded" class="text-sm !fw500 text-neutral-900 dark:text-neutral-100">Help</span>
      </div>
      <UiBadge v-if="isShowPlan" variant="soft" class="w-10 px-1">
        <div class="flex items-center gap-0.5">
          <div i-lucide-stars />
          <span class="!text-10px !fw500">1/3</span>
        </div>
      </UiBadge>
    </UiButton>
    <div
      v-if="isShowPlan"
      class="relative p-1 px-1.5 bg-white border border-solid border-neutral-200 rounded-lg shadow-sm
    dark:bg-neutral-700/10 dark:border-neutral-800"
    >
      <div class="flex gap-1.5 w-full justify-between items-center">
        <div class="flex items-center gap-1">
          <UiBadge variant="soft" class="rounded px-1.5 py-px text-xs">
            5
          </UiBadge>
          <span class="text-13px text-neutral-800 dark:text-neutral-300 whitespace-nowrap"> {{ $t('sidebar.plan.description') }}</span>
        </div>
        <UiButton size="sm" variant="secondary" class="shadow-none text-xs px-2 py-px h-7 dark:(bg-neutral-700/30 hover:bg-neutral-700/20)">
          {{ $t('sidebar.plan.btn') }}
        </UiButton>
      </div>
    </div>
    <div
      v-else
      class="relative p-5px px-1 rounded-lg"
      :class="!isExpanded && 'cursor-pointer'"
    >
      <ReuseTemplate position="right" tw-class="absolute top--2px right--1px text-blue-500 cursor-help" />
      <div class="flex gap-1.5 w-full justify-center items-center">
        <div class="flex flex-col items-center h-7">
          <UiBadge variant="outline" class="rounded px-1 py-1 text-10px bg-white dark:bg-neutral-700/10">
            5/10
          </UiBadge>
        </div>
      </div>
    </div>
  </div>
</template>

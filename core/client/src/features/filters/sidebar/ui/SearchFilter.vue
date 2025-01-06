<script setup lang="ts">
import { computed } from 'vue'
import { createReusableTemplate, refDebounced } from '@vueuse/core'
import { useExpanded } from '@/shared/composables'
import { UiBadge, UiButton } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'openModal'): void
}>()

const expanded = useExpanded()

const { isExpanded } = expanded.getExpanded()

const debounced = refDebounced(isExpanded, 10)

const isShowFilter = computed((): boolean => {
  return isExpanded.value ? debounced.value : false
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <div class="relative h-9 2xl:h-8 mb-20px">
    <DefineTemplate v-slot="{ content }">
      <UiBadge
        variant="outline"
        class="px-1 py-0 text-xs gap-[1px] text-neutral-600 bg-neutral-50 dark:(bg-neutral-800 text-neutral-200)"
      >
        <span class="text-[10px]">
          {{ content }}
        </span>
      </UiBadge>
    </DefineTemplate>
    <UiButton
      :variant="isExpanded ? 'outline' : 'ghost'"
      size="sm"
      class="w-full justify-start rounded-8px px-2 !bg-white dark:(!bg-#262626 border-neutral-600/20)
      transition-[padding,width] duration-700 ease"
      :class="[
        isExpanded
          ? 'hover:!bg-neutral-100/10 dark:hover:!bg-neutral-600/30'
          : 'shadow-none !bg-transparent hover:!bg-neutral-200/35 dark:(hover:!bg-neutral-600/35 !bg-transparent)',
      ]"
      @click="emit('openModal')"
    >
      <div
        i-lucide-search
        class="text-neutral-800 dark:text-neutral-200 2xl:(!w-4 !h-4)"
        :class="[
          isExpanded
            ? 'mr-1 !w-15px !h-15px'
            : 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 !h-16px !w-16px',
        ]"
      />
      <span
        v-if="isExpanded"
        class="text-13px 2xl:text-sm fw500 text-neutral-700 dark:text-neutral-200 whitespace-nowrap transition-transform duration-250 ease-in-out transform"
        :class="isShowFilter ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'"
      >
        {{ $t('sidebar.input') }}
      </span>
    </UiButton>
    <div v-if="isExpanded" class="absolute h-full right-2 top-1/2 translate-y--1/2 flex items-center gap-1">
      <ReuseTemplate content="Ctrl / ⌘" />
      <ReuseTemplate content="K" />
    </div>
    <ReuseTemplate v-else content="⌘K" class="absolute -right-1 top-1 transform -translate-y-1/2 bg-white dark:bg-neutral-800" />
  </div>
</template>

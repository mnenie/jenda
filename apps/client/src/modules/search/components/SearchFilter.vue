<script setup lang="ts">
import { computed } from 'vue'
import { createReusableTemplate, refDebounced } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { UiBadge, UiButton } from '@/shared/ui'
import { useExpandedContext } from '@/shared/composables/expanded'

const emit = defineEmits<{
  (e: 'openModal'): void
}>()

const { isExpanded } = useExpandedContext()

const debounced = refDebounced(isExpanded, 10)

const isShowFilter = computed((): boolean => {
  return isExpanded.value ? debounced.value : false
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <div class="relative h-9 2xl:h-8 mb-12px">
    <DefineTemplate v-slot="{ content }">
      <UiBadge
        variant="outline"
        class="px-1 py-0 text-xs gap-[1px] text-neutral-600 bg-neutral-50 dark:(bg-neutral-800 text-neutral-200)"
      >
        <span class="text-10px">
          {{ content }}
        </span>
      </UiBadge>
    </DefineTemplate>
    <UiButton
      :variant="isExpanded ? 'outline' : 'ghost'"
      size="sm"
      class="w-full justify-start rounded-lg px-2 !bg-white dark:(!bg-#262626 border-neutral-600/20) focus:ring-0 custom-btn-transition bg-transition"
      :class="[
        isExpanded
          ? 'hover:!bg-neutral-100/10 dark:hover:!bg-neutral-600/30'
          : '!bg-transparent hover:!bg-neutral-200/35 dark:(hover:!bg-neutral-600/35 !bg-transparent)',
      ]"
      @click="emit('openModal')"
    >
      <Icon
        icon="lucide:search"
        class="text-neutral-800 2xl:(!w-4 !h-4)"
        :class="[
          isExpanded
            ? 'w-15px h-15px dark:text-neutral-300'
            : 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16px w-16px dark:text-neutral-200',
        ]"
      />
      <span
        v-if="isExpanded"
        class="text-default fw500 text-neutral-700 dark:text-neutral-200 whitespace-nowrap transition-transform duration-250 ease-in-out transform"
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

<style scoped>
.custom-btn-transition {
  transition:
    padding 700ms ease,
    width 700ms ease;
}

.bg-transition {
  transition: background 150ms ease;
}
</style>

<script setup lang="ts">
import { useExpanded } from '@/shared/lib/composables'
import { UiBadge, UiButton } from '@/shared/ui'
import { createReusableTemplate, useDark } from '@vueuse/core'
import { computed } from 'vue'

const emit = defineEmits<{
  (e: 'openModal'): void
}>()

const isDark = useDark()

const expanded = useExpanded()

const { isExpanded } = expanded.getExpanded()

const iconColor = computed(() => {
  if (isDark.value) {
    return !isExpanded.value ? 'var(--zinc-200)' : 'var(--zinc-300)'
  }
  else {
    return !isExpanded.value ? 'var(--zinc-800)' : 'rgb(82 82 91 / 0.9)'
  }
})

const expandedFilterStyles = computed<Record<string, string>>(() => ({
  backgroundColor: isDark.value ? '#262626' : 'rgba(var(--zinc-rgb-200), 0.1)',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  border: isDark.value ? '1px solid rgba(var(--zinc-rgb-600), 0.3)' : '',
}))

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <div class="relative h-8" :style="{ marginBottom: isExpanded ? '20px' : '19px' }">
    <UiButton
      :variant="isExpanded ? 'outline' : 'ghost'"
      class="w-full justify-start h-8 rounded-8px px-2 search-filter transition-[background-color,padding,width] duration-200 ease"
      :class="[
        isExpanded
          ? 'hover:!bg-neutral-200/30 dark:hover:!bg-neutral-600/30'
          : 'hover:!bg-neutral-200/35 dark:hover:!bg-neutral-600/35',
      ]"
      :style="isExpanded ? expandedFilterStyles : null"
      @click="emit('openModal')"
    >
      <div
        i-lucide-search
        :class="[
          isExpanded
            ? 'h-4 w-4 mr-1'
            : 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4',
        ]"
        :style="{ color: iconColor }"
      />
      <span v-show="isExpanded" class="text-sm fw500 text-neutral-700 dark:text-neutral-200">
        {{ $t('sidebar.input') }}
      </span>
    </UiButton>

    <DefineTemplate v-slot="{ content }">
      <UiBadge variant="outline" class="px-1 py-0 text-xs gap-[1px] text-neutral-600 bg-neutral-50">
        <span class="text-[10px]">
          {{ content }}
        </span>
      </UiBadge>
    </DefineTemplate>

    <div v-if="isExpanded" class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
      <ReuseTemplate content="Ctrl / ⌘" />
      <ReuseTemplate content="K" />
    </div>
    <ReuseTemplate v-else content="⌘K" class="absolute -right-1 top-1 transform -translate-y-1/2 bg-white" />
  </div>
</template>

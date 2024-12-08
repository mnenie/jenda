<script setup lang="ts">
import { useExpanded } from '@/shared/lib/composables'
import { UiBadge, UiButton } from '@/shared/ui'
import { createReusableTemplate } from '@vueuse/core'

const emit = defineEmits<{
  (e: 'openModal'): void
}>()

const expanded = useExpanded()

const { isExpanded } = expanded.getExpanded()

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <div class="relative h-8" :style="{ marginBottom: isExpanded ? '20px' : '19px' }">
    <UiButton
      :variant="isExpanded ? 'outline' : 'ghost'"
      class="w-full justify-start h-8 rounded-8px px-2 !bg-white dark:(!bg-#262626 border-neutral-600/20)
      transition-[background-color,padding,width] duration-200 ease"
      :class="[
        isExpanded
          ? 'hover:!bg-neutral-100/10 dark:hover:!bg-neutral-600/30'
          : 'shadow-none !bg-transparent hover:!bg-neutral-200/35 dark:(hover:!bg-neutral-600/35 !bg-transparent)',
      ]"
      @click="emit('openModal')"
    >
      <div
        i-lucide-search
        class="text-neutral-800 dark:text-neutral-200"
        :class="[
          isExpanded
            ? 'h-4 w-4 mr-1'
            : 'absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4',
        ]"
      />
      <span v-show="isExpanded" class="text-sm fw500 text-neutral-700 dark:text-neutral-200">
        {{ $t('sidebar.input') }}
      </span>
    </UiButton>

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

    <div v-if="isExpanded" class="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
      <ReuseTemplate content="Ctrl / ⌘" />
      <ReuseTemplate content="K" />
    </div>
    <ReuseTemplate v-else content="⌘K" class="absolute -right-1 top-1 transform -translate-y-1/2 bg-white dark:bg-neutral-800" />
  </div>
</template>

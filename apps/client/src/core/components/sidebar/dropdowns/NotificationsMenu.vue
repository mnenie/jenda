<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useExpandedContext } from '@/shared/composables/expanded'
import { UiBadge, UiButton } from '@/shared/ui'

const { isExpanded } = useExpandedContext()
</script>

<template>
  <UiButton
    v-tooltip.right="{
      content: $t(`sidebar.notifications.btn`),
      triggers: ['hover'],
      disabled: isExpanded,
    }"
    variant="ghost"
    size="sm"
    class="relative w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease justify-between mb-1"
    :class="[isExpanded ? 'justify-between' : 'justify-center p-0']"
  >
    <div class="flex items-center gap-2">
      <Icon
        icon="si:notifications-thick-line"
        class="!w-16px !h-16px 2xl:(!w-4 !h-4) text-neutral-800"
        :class="[isExpanded ? 'dark:text-neutral-300' : 'dark:text-neutral-200']"
      />
      <span v-show="isExpanded" class="text-default !fw500 text-neutral-900 dark:text-neutral-100">
        {{ $t('sidebar.notifications.btn') }}
      </span>
    </div>
    <UiBadge variant="soft" class="px-1 py-0 text-xs" :class="!isExpanded && 'absolute top-0 right-0 h-4'">
      <span :class="!isExpanded && 'text-10px'">12</span>
    </UiBadge>
  </UiButton>
</template>

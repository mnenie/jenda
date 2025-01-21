<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton
    variant="ghost"
    size="sm"
    class="gap-1 !h-7 py-0 px-2 mr-1 !text-purple-600 dark:!text-purple-400"
  >
    <Icon icon="hugeicons:ai-magic" class="w-4 h-4" />
    <span class="text-13px fw400 mt-0.5">Ask AI</span>
  </UiButton>
  <div class="w-1px h-4.5 mr-1 bg-neutral-200 dark:bg-neutral-700" />
</template>

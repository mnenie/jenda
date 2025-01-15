<script setup lang="ts">
import { UiBadge, UiButton } from '@/shared/ui'
</script>

<template>
  <div class="inline-flex items-center gap-2 mt-8">
    <div class="relative">
      <UiButton variant="dashed" disabled>
        {{ $t('analytics.share.btn') }}
      </UiButton>
      <UiBadge variant="default" class="absolute px-1 top--0.5 right--2">
        dev
      </UiBadge>
    </div>
    <span class="text-sm text-neutral-700 dark:text-neutral-200">- {{ $t('analytics.share.description') }} 😉</span>
  </div>
</template>

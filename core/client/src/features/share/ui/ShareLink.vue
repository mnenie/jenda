<script setup lang="ts">
import { ShimmerButton } from '@/shared/ui'
</script>

<template>
  <ShimmerButton shimmer-size="2px">
    <div i-hugeicons-user-multiple-02 class="text-neutral-900 dark:text-neutral-100 text-sm" />
    <span
      class="whitespace-pre-wrap text-center text-neutral-800 dark:text-neutral-100 text-sm fw500"
    >
      {{ $t('header.share') }}
    </span>
  </ShimmerButton>
</template>

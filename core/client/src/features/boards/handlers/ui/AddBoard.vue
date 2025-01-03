<script setup lang="ts">
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton size="sm" variant="solid" class="px-2">
    <span i-hugeicons-add-01 class="w-4 h-4" />
    <span class="text-sm">{{ $t('boards.create') }}</span>
  </UiButton>
</template>

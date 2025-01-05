<script setup lang="ts">
import { type ButtonVariants, UiButton } from '@/shared/ui'

defineProps<{
  variant: ButtonVariants['variant']
  plural: number
}>()
</script>

<template>
  <UiButton :variant="variant" size="sm" class="px-2">
    <span i-hugeicons-add-01 class="w-4 h-4" />
    <span class="text-sm">{{ $t('boards.create', plural) }}</span>
  </UiButton>
</template>

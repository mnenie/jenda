<script setup lang="ts">
import { type ButtonVariants, UiButton } from '@/shared/ui'

defineProps<{
  variant: ButtonVariants['variant']
  plural: number
}>()

const emit = defineEmits<{
  (e: 'add'): void
}>()
</script>

<template>
  <UiButton
    :variant="variant"
    size="sm"
    class="px-2"
    @click="emit('add')"
  >
    <span i-hugeicons-add-01 class="w-4 h-4" />
    <span class="text-sm">{{ $t('notes.create', plural) }}</span>
  </UiButton>
</template>

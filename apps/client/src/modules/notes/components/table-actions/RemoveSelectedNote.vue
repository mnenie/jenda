<script setup lang="ts">
import { UiButton } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <UiButton
    variant="ghost"
    size="default"
    class="!text-red-500"
    @click="emit('remove')"
  >
    <span i-hugeicons-delete-03 class="w-4 h-4" />
    <span class="text-default">{{ $t('notes.remove') }}</span>
  </UiButton>
</template>

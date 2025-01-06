<script setup lang="ts">
import { UiButton } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <UiButton
    variant="ghost"
    size="sm"
    class="px-2 !text-red-500"
    @click="emit('remove')"
  >
    <span i-hugeicons-delete-03 class="w-4 h-4" />
    <!-- <span class="text-sm">{{ $t('boards.remove') }}</span> -->
    <span class="text-sm">Удалить</span>
  </UiButton>
</template>

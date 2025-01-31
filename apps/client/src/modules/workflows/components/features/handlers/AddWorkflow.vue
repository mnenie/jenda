<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { type ButtonVariants, UiButton } from '@/shared/ui'

defineProps<{
  variant: ButtonVariants['variant']
}>()

const emit = defineEmits<{
  (e: 'addWorkflow'): void
}>()
</script>

<template>
  <UiButton
    :variant="variant"
    size="default"
    @click="emit('addWorkflow')"
  >
    <Icon icon="icon-park-solid:add-music" class="min-w-4 min-h-4" />
    <span class="text-default">{{ $t('workflows.create') }}</span>
  </UiButton>
</template>

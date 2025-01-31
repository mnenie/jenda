<script setup lang="ts">
import { Icon } from '@iconify/vue'
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
    size="default"
    @click="emit('add')"
  >
    <Icon icon="solar:widget-add-bold-duotone" class="min-w-4 min-h-4" />
    <span class="text-default">{{ $t('boards.create', plural) }}</span>
  </UiButton>
</template>

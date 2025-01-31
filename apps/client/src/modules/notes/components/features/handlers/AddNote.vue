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
    <Icon icon="qlementine-icons:add-file-16" class="min-w-4 min-h-4" />
    <span class="text-default">{{ $t('notes.create', plural) }}</span>
  </UiButton>
</template>

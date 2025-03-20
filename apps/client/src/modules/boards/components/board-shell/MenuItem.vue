<script setup lang="ts">
import { UiBadge, UiDropdownMenuItem, UiDropdownMenuShortcut } from '@/shared/ui'

defineProps<{
  tPrefix?: string
  shortcut?: string
}>()

const emit = defineEmits<{
  (e: 'openDialogForm'): void
}>()
</script>

<template>
  <UiDropdownMenuItem
    class="cursor-pointer"
    @select.prevent="emit('openDialogForm')"
  >
    <span class="text-default fw370">{{ $t(`board.menu.${tPrefix}`) }}</span>
    <UiDropdownMenuShortcut class="text-neutral-500">
      <UiBadge variant="secondary" class="px-1 py-px">
        {{ shortcut }}
      </UiBadge>
    </UiDropdownMenuShortcut>
  </UiDropdownMenuItem>
</template>

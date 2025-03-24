<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { LabelWithStatus } from '../../../types'
import { UiDropdownMenu, UiDropdownMenuContent, UiDropdownMenuItem, UiDropdownMenuTrigger } from '@/shared/ui'

defineProps<{
  status?: LabelWithStatus['status']
}>()

const emit = defineEmits<{
  (e: 'edit'): void
  (e: 'delete'): void
}>()
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <Icon icon="lucide:ellipsis" class="w-4.4 h-4.4 text-neutral-500 dark:text-neutral-400 cursor-pointer" />
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent>
      <UiDropdownMenuItem :disabled="status === 'editing'" @select="emit('edit')">
        {{ $t('board.forms.labels.actions.edit') }}
      </UiDropdownMenuItem>
      <UiDropdownMenuItem class="dropdown-menu-destructive-item" @select="emit('delete')">
        {{ $t('board.forms.labels.actions.delete') }}
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

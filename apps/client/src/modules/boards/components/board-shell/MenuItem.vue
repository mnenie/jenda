<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import { UiBadge, UiDropdownMenuItem, UiDropdownMenuShortcut } from '@/shared/ui'

const { prevent = true } = defineProps<{
  tPrefix?: string
  shortcut?: string
  prevent?: boolean
}>()

const emit = defineEmits<{
  (e: 'openDialogForm'): void
}>()

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)

function onSelectItem(e: Event) {
  prevent && e.preventDefault()
  emit('openDialogForm')
}
</script>

<template>
  <UiDropdownMenuItem
    class="cursor-pointer"
    :disabled="board.status === 'archived'"
    @select="onSelectItem"
  >
    <span class="text-default fw370">{{ $t(`board.menu.${tPrefix}`) }}</span>
    <UiDropdownMenuShortcut class="text-neutral-500">
      <UiBadge variant="secondary" class="px-1 py-px 2xl:text-10px">
        {{ shortcut }}
      </UiBadge>
    </UiDropdownMenuShortcut>
  </UiDropdownMenuItem>
</template>

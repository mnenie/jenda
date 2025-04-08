<script setup lang="ts" generic="E extends Readonly<Emoji>">
import { Icon } from '@iconify/vue'
import type { Emoji } from '../../types/comment'
import { UiButton, UiContextMenuItem, UiDropdownMenu, UiDropdownMenuContent, UiDropdownMenuTrigger } from '@/shared/ui'

defineProps<{
  emojis: E[]
}>()

const emit = defineEmits<{
  (e: 'chooseEmoji', emoji: E): void
}>()
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton
        variant="secondary"
        class="!h-unset p-1 px-2 rounded-full !text-small text-neutral-500 gap-1 shadow-none"
      >
        <Icon icon="lucide:smile-plus" class="w-4 h-4" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="start" side="top">
      <div class="flex">
        <UiContextMenuItem v-for="emoji in emojis" :key="emoji.type" class="p-1.5" @select="emit('chooseEmoji', emoji)">
          <Icon :icon="emoji.symbol" class="min-w-4.4 min-h-4.4 text-neutral-500 dark:text-neutral-400" />
        </UiContextMenuItem>
      </div>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

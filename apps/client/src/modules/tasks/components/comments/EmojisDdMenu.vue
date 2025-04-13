<script setup lang="ts" generic="R extends Emoji, E extends Readonly<R>">
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import type { Emoji } from '../../types/comment'
import { UiButton, UiDropdownMenu, UiDropdownMenuContent, UiDropdownMenuItem, UiDropdownMenuTrigger } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'
import { useUserStore } from '@/modules/auth/stores/auth'

const props = defineProps<{
  emojis: E[]
  reactions?: R[]
}>()

const emit = defineEmits<{
  (e: 'chooseEmoji', emoji: E): void
}>()

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

function isReactionActive(emoji: E) {
  return props.reactions?.some(reaction => (
    reaction.type === emoji.type && reaction.users?.includes(user.value._id)
  ))
}
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
      <div class="flex gap-0.5">
        <UiDropdownMenuItem
          v-for="emoji in emojis"
          :key="emoji.type"
          :class="cn(
            'p-1.5 rounded-lg',
            { '!bg-blue-100/40': isReactionActive(emoji) },
          )"
          @click="emit('chooseEmoji', emoji)"
        >
          <Icon :icon="emoji.symbol" class="min-w-4.4 min-h-4.4 text-neutral-500 dark:text-neutral-400" />
        </UiDropdownMenuItem>
      </div>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

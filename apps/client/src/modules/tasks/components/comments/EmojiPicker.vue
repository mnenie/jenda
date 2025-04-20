<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { useEmojiPicker } from '../../composables/emoji-picker'
import { emojis } from '../../constants/emojies'
import EmojisDdMenu from './EmojisDdMenu.vue'
import type { Comment } from '../../types/comment'
import { useUserStore } from '@/modules/auth/stores/auth'
import { cn } from '@/shared/libs/shadcn/utils'
import { UiBadge } from '@/shared/ui'

const props = defineProps<{
  comment: Comment
}>()

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const { reactions, removeOrSetReaction } = useEmojiPicker(props.comment, user.value._id)
</script>

<template>
  <div :class="cn('flex items-center gap-1 mr-1.5', reactions.length ? 'mr-1.5' : 'mr-1')">
    <EmojisDdMenu :emojis :reactions @choose-emoji="removeOrSetReaction($event)" />
    <template v-if="reactions.length">
      <div v-for="emoji in reactions" :key="emoji.type" class="flex items-center gap-0.5">
        <UiBadge
          variant="secondary"
          :class="cn(
            'px-0.5 py-0 rounded-lg gap-1 w-fit cursor-pointer',
            { 'bg-blue-100/80 dark:bg-blue-800/50': emoji.users?.includes(user._id) },
          )"
          @click="removeOrSetReaction(emoji)"
        >
          <Icon :icon="emoji.symbol" class="min-w-4 min-h-4" />
          <span v-if="emoji.count" class="text-sm text-neutral-800 dark:text-neutral-200 select-none">{{ emoji.count }}</span>
        </UiBadge>
      </div>
    </template>
  </div>
</template>

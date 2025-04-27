<script setup lang="ts">
import { computed, inject } from 'vue'
import DOMPurify from 'dompurify'
import { useTaskDataLoader as useTaskData } from '../../loaders/task-cl'
import { useCommentInteractions } from '../../composables/comment-interactions.shared'
import { useCommentsQuery } from '../../queries/comments'
import EmojiPicker from './EmojiPicker.vue'
import type { Comment } from '../../types/comment'
import { cn } from '@/shared/libs/shadcn/utils'
import { DayjsInjectionKey } from '@/plugins/dayjs'
import { UiBadge, UiButton } from '@/shared/ui'

const props = defineProps<{
  comment: Comment
  isCurrentUser?: boolean
}>()

const { data: task } = useTaskData()
const { data: comments } = useCommentsQuery()

const { isEditingOrReplyingById, openEditOrReplyPanel, action } = useCommentInteractions()

const dayjs = inject(DayjsInjectionKey)!

const createdAt = computed(() =>
  dayjs(props.comment.createdAt).format('LT'),
)

const isAssignee = computed(() =>
  task.value.users?.some(user => user._id === props.comment.user._id),
)

// _todo [skip ci] подумать над тем что с ws приходит с бэка
const replies = computed(() => {
  return comments.value?.reduce((acc, group) => (
    acc + group.comments.filter(c => c.from?._id === props.comment._id).length
  ), 0)
})

const sanitizedCommentMessage = computed(() => {
  return DOMPurify.sanitize(props.comment.message, {
    ALLOWED_ATTR: ['class', 'style', 'src', 'alt', 'href', 'target'],
    ALLOW_DATA_ATTR: true,
  })
})
</script>

<template>
  <div class="relative flex flex-col gap-0 w-full">
    <div
      :class="cn(
        'relative z-3 flex items-center justify-between px-2.5 w-full rounded-md rounded-b-none',
      )"
    >
      <div class="flex items-center gap-2 w-full justify-between">
        <div class="flex items-center gap-2">
          <span class="text-default fw500 dark:text-neutral-100">{{ comment.user.email }}</span>
          <UiBadge variant="outline" class="px-1 py-0 rounded-lg">
            {{ $t(`task.comments.role.${comment.user.role}`) }}
          </UiBadge>
          <UiBadge v-if="isAssignee" variant="outline" class="px-1 py-0 rounded-lg ml--0.5">
            {{ $t('task.comments.assignee') }}
          </UiBadge>
          <div v-if="replies" class="flex items-center gap-0.5 text-small text-neutral-400">
            <span i-lucide-reply />
            <span>{{ replies }}</span>
          </div>
          <div v-if="isEditingOrReplyingById(comment._id) && action === 'edit'" class="flex items-center gap-0.5 text-small text-neutral-400">
            <span>{{ $t('task.comments.edit', 1) }}</span>
            <span class="pulsing-dots">...</span>
          </div>
        </div>
        <div class="flex items-center gap-3 ml-auto w-fit text-small text-neutral-400 dark:text-neutral-500 text-nowrap">
          <span v-if="comment.isEdit">{{ $t('task.comments.edit', 0) }}</span>
          <span>{{ createdAt }}</span>
        </div>
      </div>
    </div>
    <div
      :class="cn(
        'flex flex-col gap-1.4 px-2.5 pt-1.5 rounded-md rounded-t-none w-fit max-w-90%',
      )"
    >
      <div v-if="comment.from" class="px-0 p-1 pr-2 bg-neutral-100 rounded-md max-w-fit dark:bg-neutral-700">
        <div class="max-w-full relative pr-2">
          <div class="min-w-0.8 absolute h-full left-0.5 bg-blue-500 rounded-lg self-center dark:bg-blue-600" />
          <div class="flex flex-col gap-0.5 ml-3 min-w-0 w-full">
            <span class="text-neutral-600 text-default fw460 dark:text-neutral-300">{{ comment.from.user.email }}</span>
            <div class="truncate text-neutral-500 line-clamp-1 text-wrap dark:text-neutral-300" v-html="comment.from.message" />
          </div>
        </div>
      </div>
      <div class="text-default jenda-editor dark:text-neutral-300" v-html="sanitizedCommentMessage" />
      <div class="flex items-center gap-1">
        <EmojiPicker :comment />
        <UiButton
          variant="ghost"
          class="!h-unset p-1 px-0 rounded-lg !bg-transparent !text-small text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-200"
          @click="openEditOrReplyPanel(comment, 'reply')"
        >
          {{ $t('task.comments.reply') }}
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jenda-editor > :not([hidden]) ~ :not([hidden]) {
  margin-top: calc(0.1rem * calc(1 - var(--un-space-y-reverse)));
}

:deep(.jenda-editor) p {
  min-height: 1.5rem !important;
}

.pulsing-dots {
  animation: pulseOpacity 1.5s infinite ease-in-out;
}

@keyframes pulseOpacity {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}
</style>

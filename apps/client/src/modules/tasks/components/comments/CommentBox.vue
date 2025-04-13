<script setup lang="ts">
import { computed, inject } from 'vue'
import { useTaskDataLoader as useTaskData } from '../../loaders/task-cl'
import { useEditComment } from '../../composables/edit-comment.shared'
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

const { isEditingById } = useEditComment()

const dayjs = inject(DayjsInjectionKey)!

const createdAt = computed(() =>
  dayjs(props.comment.createdAt).format('LT'),
)

const isAssignee = computed(() =>
  task.value.users?.some(user => user._id === props.comment.user._id),
)
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
          <span :class="cn('text-default fw500')">{{ comment.user.email }}</span>
          <UiBadge variant="outline" class="px-1 py-0 rounded-lg">
            {{ comment.user.role }}
          </UiBadge>
          <UiBadge v-if="isAssignee" variant="outline" class="px-1 py-0 rounded-lg ml--0.5">
            {{ $t('task.comments.assignee') }}
          </UiBadge>
          <div v-if="comment.replies" class="flex items-center gap-0.5 text-small text-neutral-400">
            <span i-lucide-reply />
            <span>{{ comment.replies }}</span>
          </div>
          <div v-if="isEditingById(comment._id)" class="flex items-center gap-0.5 text-small text-neutral-400">
            <span>{{ $t('task.comments.editing') }}</span>
            <span class="pulsing-dots">...</span>
          </div>
        </div>
        <span class="text-sm text-neutral-400 text-nowrap ml-auto">{{ createdAt }}</span>
      </div>
    </div>
    <div
      :class="cn(
        'flex flex-col gap-1.4 px-2.5 pt-1.5 rounded-md rounded-t-none w-fit max-w-90%',
      )"
    >
      <div class="text-default jenda-editor" v-html="comment.message" />
      <div class="flex items-center gap-1">
        <EmojiPicker :comment />
        <UiButton variant="ghost" class="!h-unset p-1 px-0 rounded-lg !bg-transparent !text-small text-neutral-500">
          {{ $t('task.comments.reply') }}
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

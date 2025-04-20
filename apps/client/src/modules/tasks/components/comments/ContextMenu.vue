<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { useI18n } from 'vue-i18n'
import { useCommentsMutations } from '../../mutations/comments'
import { useCommentInteractions } from '../../composables/comment-interactions.shared'
import type { Comment } from '../../types/comment'
import { UiContextMenuContent, UiContextMenuItem } from '@/shared/ui'

const props = defineProps<{
  comment: Comment
  isCurrentUser: boolean
  isUserAdmin: boolean
}>()

// _todo [skip ci]

const { t } = useI18n()

const clipboard = useClipboard({
  source: `\`${`#${props.comment._id}`}\``,
})
const { deleteComment } = useCommentsMutations()

function copyLink() {
  clipboard.copy()
  toast.success(t('task.comments.copied'), {
    duration: 1000,
  })
}
const { openEditOrReplyPanel } = useCommentInteractions()
</script>

<template>
  <UiContextMenuContent class="relative min-w-40">
    <UiContextMenuItem @select="copyLink">
      <Icon icon="hugeicons:link-02" class="w-4 h-4" />
      {{ $t('task.comments.actions[0]') }}
    </UiContextMenuItem>
    <UiContextMenuItem @select="openEditOrReplyPanel(comment, 'edit')">
      <Icon icon="hugeicons:message-01" class="w-4 h-4" />
      {{ $t('task.comments.actions[1]') }}
    </UiContextMenuItem>
    <UiContextMenuItem
      v-if="isCurrentUser || isUserAdmin"
      class="dropdown-menu-destructive-item"
      @select="deleteComment(comment._id)"
    >
      <Icon icon="hugeicons:delete-04" class="w-4 h-4" />
      {{ $t('task.comments.actions[2]') }}
    </UiContextMenuItem>
  </UiContextMenuContent>
</template>

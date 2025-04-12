<script setup lang="ts">
import { shallowRef } from 'vue'
import { Icon } from '@iconify/vue'
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { useI18n } from 'vue-i18n'
import { useCommentsMutations } from '../../mutations/comments'
import { useEditComment } from '../../composables/edit-comment.shared'
import type { Comment } from '../../types/comment'
import { UiContextMenuContent, UiContextMenuItem } from '@/shared/ui'

const props = defineProps<{
  comment: Comment
  isCurrentUser: boolean
  isUserAdmin: boolean
}>()

// _todo [skip ci]
const source = shallowRef(`\`${`#${props.comment._id}`}\``)

const { t } = useI18n()

const { copy } = useClipboard({
  source,
})
const { deleteComment } = useCommentsMutations()

function copyLink() {
  copy(source.value)
  toast.success(t('task.comments.copied'), {
    duration: 1000,
  })
}
const { openEditPanel } = useEditComment()
</script>

<template>
  <UiContextMenuContent class="relative">
    <UiContextMenuItem @select="copyLink">
      <Icon icon="hugeicons:link-02" class="w-4 h-4" />
      {{ $t('task.actions[0]') }}
    </UiContextMenuItem>
    <UiContextMenuItem v-if="isCurrentUser" @select="openEditPanel(comment)">
      <Icon icon="hugeicons:message-01" class="w-4 h-4" />
      {{ $t('task.actions[1]') }}
    </UiContextMenuItem>
    <UiContextMenuItem
      v-if="isCurrentUser || isUserAdmin"
      class="dropdown-menu-destructive-item"
      @select="deleteComment(comment._id)"
    >
      <Icon icon="hugeicons:delete-04" class="w-4 h-4" />
      {{ $t('task.actions[2]') }}
    </UiContextMenuItem>
  </UiContextMenuContent>
</template>

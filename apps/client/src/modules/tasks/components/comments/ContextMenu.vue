<script setup lang="ts">
import { shallowRef } from 'vue'
import { Icon } from '@iconify/vue'
import { useClipboard } from '@vueuse/core'
import { useDeleteComment } from '../../mutations/comments'

import type { Comment } from '../../types/comment'
import { UiContextMenuContent, UiContextMenuItem } from '@/shared/ui'

const props = defineProps<{
  comment: Comment
  isCurrentUser: boolean
}>()

const source = shallowRef(`#${props.comment._id}`)
const { copy } = useClipboard({
  source,
})

const { deleteComment, asyncStatus } = useDeleteComment()

// _todo[skip_ci]: добавить действия

const actions = [
  {
    prefix: 'copy',
    icon: 'hugeicons:link-02',
    action: () => copy(source.value),
  },
  {
    prefix: 'edit',
    icon: 'hugeicons:message-01',
    action: () => copy(source.value),
  },
  {
    prefix: 'delete',
    icon: 'hugeicons:delete-04',
    action: () => deleteComment(props.comment._id),
  },
] as const
</script>

<template>
  <UiContextMenuContent class="relative">
    <UiContextMenuItem
      v-for="action, idx in actions"
      :key="action.prefix"
      :class="{
        'dropdown-menu-destructive-item': action.prefix === 'delete',
      }"
      @select="action.action"
    >
      <Icon :icon="action.icon" class="w-4 h-4" />
      {{ $t(`task.actions[${idx}]`) }}
    </UiContextMenuItem>
  </UiContextMenuContent>
</template>

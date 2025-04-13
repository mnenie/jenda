<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommentInteractions } from '../../composables/comment-interactions.shared'
import ProfileImage from './ProfileImage.vue'
import ContextMenu from './ContextMenu.vue'
import CommentBox from './CommentBox.vue'
import type { Comment } from '../../types/comment'
import { useUserStore } from '@/modules/auth/stores/auth'
import { UiContextMenu, UiContextMenuTrigger } from '@/shared/ui'

const props = defineProps<{
  comment: Comment
  link?: boolean
}>()

const authStore = useUserStore()
const { user } = storeToRefs(authStore)

const isCurrentUser = computed(() => user.value._id === props.comment.user._id)
const isUserAdmin = computed(() => user.value.role === 'admin')

const { contextMenuState } = useCommentInteractions()
</script>

<template>
  <UiContextMenu v-model:open="contextMenuState">
    <UiContextMenuTrigger class="flex items-end gap-10 px-4 py-2 rounded-md justify-between w-full w-full data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800">
      <div class="relative flex items-start gap-px w-full">
        <div v-if="link" class="absolute w-px h-[calc(100%-18px)] left-3 top-8 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
        <ProfileImage :user="comment.user" />
        <CommentBox :comment :is-current-user />
      </div>
    </UiContextMenuTrigger>
    <ContextMenu :comment :is-current-user :is-user-admin />
  </UiContextMenu>
</template>

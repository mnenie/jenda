import { shallowRef } from 'vue'
import { createSharedComposable } from '@vueuse/core'
import type { Comment } from '../types/comment'

export const useCommentInteractions = createSharedComposable(_useCommentInteractions<Comment, 'edit' | 'reply'>)

function _useCommentInteractions<C extends Comment, A extends 'edit' | 'reply'>() {
  const commentId = shallowRef<C['_id'] | undefined>(undefined)
  const isPanelOpen = shallowRef(false)
  const commentMessage = shallowRef<C['message']>('')
  const repliedUser = shallowRef<Pick<C['user'], 'email'>>()

  const action = shallowRef<A | null>(null)

  const contextMenuState = shallowRef(false)

  const openEditOrReplyPanel = (comment: C, selectedAction: A) => {
    action.value = selectedAction
    repliedUser.value = comment.user
    commentMessage.value = comment.message
    isPanelOpen.value = true
    commentId.value = commentId.value === comment._id ? null : comment._id
  }
  const closeEditOrReplyPanel = () => {
    action.value = null
    isPanelOpen.value = false
    commentId.value = null
    commentMessage.value = ''
    repliedUser.value = undefined
  }

  const isEditingOrReplyingById = (id: string) => {
    return commentId.value === id
  }

  return {
    commentMessage,
    commentId,
    repliedUser,
    isPanelOpen,
    contextMenuState,
    action,
    isEditingOrReplyingById,
    openEditOrReplyPanel,
    closeEditOrReplyPanel,
  }
}

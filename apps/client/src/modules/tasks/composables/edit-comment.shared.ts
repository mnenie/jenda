import { shallowRef } from 'vue'
import { createSharedComposable } from '@vueuse/core'
import type { Comment } from '../types/comment'

export const useEditComment = createSharedComposable(_useEditComment<Comment>)

function _useEditComment<C extends Comment>() {
  const editingCommentId = shallowRef<C['_id'] | undefined>(undefined)
  const isEditPanelOpen = shallowRef(false)
  const editableCommentMessage = shallowRef<C['message']>('')

  const openEditPanel = (comment: C) => {
    editableCommentMessage.value = comment.message
    isEditPanelOpen.value = true
    editingCommentId.value = editingCommentId.value === comment._id ? null : comment._id
  }
  const closeEditPanel = () => {
    isEditPanelOpen.value = false
    editingCommentId.value = null
    editableCommentMessage.value = ''
  }

  const isEditingById = (id: string) => {
    return editingCommentId.value === id
  }

  return {
    editableCommentMessage,
    editingCommentId,
    isEditingById,
    openEditPanel,
    closeEditPanel,
    isEditPanelOpen,
  }
}

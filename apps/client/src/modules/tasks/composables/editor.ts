import { isRef, nextTick, shallowRef, toRaw, toValue } from 'vue'
import { useBase64, useFileDialog } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useCommentsMutations } from '../mutations/comments'
import { useCommentInteractions } from './comment-interactions.shared'
import type { MaybeRefOrGetter, Ref, ShallowRef } from 'vue'
import type { ReplyFrom } from '../types/comment'
import { useUserStore } from '@/modules/auth/stores/auth'

export function useCommentEditor<T extends new (...args: unknown[]) => any, E extends InstanceType<T>>(
  editorInstance: Readonly<ShallowRef<E>>,
  editor: MaybeRefOrGetter<string>,
) {
  const currentFileByUrl = shallowRef<File>()

  const base64 = useBase64(currentFileByUrl)
  const { open, onChange } = useFileDialog({ accept: 'image/*' })

  const { updateComment, createComment } = useCommentsMutations()

  const { isPanelOpen, action, commentMessage, commentId, closeEditOrReplyPanel, repliedUser } = useCommentInteractions()

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  async function setImageToPosition() {
    open()
    onChange(async (files) => {
      if (!files)
        return
      currentFileByUrl.value = files[0]
      const response64 = await base64.execute()
      if (toValue(editorInstance) && currentFileByUrl.value) {
        toValue(editorInstance).chaining()?.setImage({ src: response64 }).run()
      }
    })
  }

  function updateOrReplyCommentMessage() {
    if (action.value === 'edit') {
      updateComment({
        _id: commentId.value,
        message: toValue(editor),
        isEdit: true,
      })
    }
    else {
      createCommentWithClean({
        _id: commentId.value!,
        user: toRaw(repliedUser.value!),
        message: commentMessage.value,
      })
    }
    closeEditOrReplyPanel()
  }

  async function createCommentWithClean(from?: ReplyFrom) {
    createComment({
      message: toValue(editor),
      user: toRaw(user.value),
      createdAt: new Date().toISOString(),
      from,
    })
    await nextTick(() => {
      const messager = document.getElementById('messager')
      if (messager) {
        messager.scrollTo({
          top: messager.scrollHeight,
          behavior: 'smooth',
        })
      }
    })
    if (isRef(editor)) {
      (editor as Ref<string>).value = ''
    }
  }

  function postOrUpdateComment() {
    if (isPanelOpen.value) {
      updateOrReplyCommentMessage()
    }
    else {
      createCommentWithClean()
    }
  }

  return {
    setImageToPosition,
    postOrUpdateComment,
  }
}

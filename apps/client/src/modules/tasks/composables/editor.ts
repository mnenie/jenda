import { isRef, nextTick, shallowRef, toRaw, toValue } from 'vue'
import { useFileDialog } from '@vueuse/core'
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
  const currentFileByUrl = shallowRef<string>()

  const { open, onChange } = useFileDialog({ accept: 'image/*' })
  const { updateComment, createComment } = useCommentsMutations()

  const { isPanelOpen, action, commentMessage, commentId, closeEditOrReplyPanel, repliedUser } = useCommentInteractions()

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  function setImageToPosition() {
    open()
    onChange((files) => {
      if (!files)
        return
      currentFileByUrl.value = `${window.location.origin}/api/files/${files[0].name}`
      if (toValue(editorInstance) && currentFileByUrl.value) {
        toValue(editorInstance).chaining()?.setImage({ src: currentFileByUrl.value }).run()
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

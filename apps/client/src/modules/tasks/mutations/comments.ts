import { defineMutation, useMutation, useQueryCache } from '@pinia/colada'
import { toast } from 'vue-sonner'
import { deleteCommentById, patchComment } from '../api'
import { useTaskDataLoader } from '../loaders/task-cl'
import { useEditComment } from '../composables/edit-comment.shared'
import type { Task } from '../types'
import type { Comment } from '../types/comment'

export const useCommentsMutations = defineMutation(() => {
  const { data: task } = useTaskDataLoader()
  const queryCache = useQueryCache()
  const { editingCommentId, closeEditPanel } = useEditComment()

  const getCacheKey = () => ['task-loader', task.value?._id].filter(Boolean)

  const ErrorFn = async (err: Error, prevTask: Task | undefined, timeout: number = 1000) => {
    await new Promise(resolve => setTimeout(resolve, timeout))
    if (prevTask) {
      queryCache.setQueryData(getCacheKey(), prevTask)
    }
    toast.error(err.message)
  }

  const { mutate: deleteComment } = useMutation({
    mutation: deleteCommentById,
    onMutate: (commentId) => {
      if (editingCommentId.value === commentId) {
        closeEditPanel()
      }
      const key = getCacheKey()
      const prevTask = queryCache.getQueryData<Task>(key)
      if (!prevTask?.commentsGroup)
        return { prevTask }

      const optimisticTask = {
        ...prevTask,
        commentsGroup: prevTask.commentsGroup
          .map(group => ({
            ...group,
            comments: group.comments.filter(c => c._id !== commentId),
          }))
          .filter(group => group.comments.length > 0),
      }
      queryCache.setQueryData(key, optimisticTask)
      return { prevTask, commentId }
    },
    onError: async (err, _, { prevTask }) => ErrorFn(err, prevTask),
  })

  const { mutate: updateComment, ...mutations } = useMutation<Comment, Partial<Comment>>({
    mutation: patchComment,
    onMutate: async (comment) => {
      const key = getCacheKey()
      const prevTask = queryCache.getQueryData<Task>(key)
      if (!prevTask?.commentsGroup)
        return { prevTask }

      const optimisticTask = {
        ...prevTask,
        commentsGroup: prevTask.commentsGroup.map(group => ({
          ...group,
          comments: group.comments.map(c =>
            c._id === comment._id ? { ...c, ...comment } : c,
          ),
        })),
      }
      queryCache.setQueryData(key, optimisticTask)
      return { prevTask }
    },
    onError: async (err: Error, _: Partial<Comment>, context: { prevTask?: Task }) =>
      ErrorFn(err, context?.prevTask, 0),
  })

  return {
    ...mutations,
    deleteComment,
    updateComment,
  }
})

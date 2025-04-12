import { inject } from 'vue'
import { defineMutation, useMutation, useQueryCache } from '@pinia/colada'
import { toast } from 'vue-sonner'
import { deleteCommentById, patchComment, postComment } from '../api'
import { useTaskDataLoader } from '../loaders/task-cl'
import { useEditComment } from '../composables/edit-comment.shared'
import type { Comment, CommentGroup } from '../types/comment'
import { DayjsInjectionKey } from '@/plugins/dayjs'

export const useCommentsMutations = defineMutation(<T extends Comment, U extends CommentGroup>() => {
  const { data: task } = useTaskDataLoader()
  const queryCache = useQueryCache()
  const { editingCommentId, closeEditPanel } = useEditComment()

  const dayjs = inject(DayjsInjectionKey)!

  const getCacheKey = () => ['task-comments', task.value?._id].filter(Boolean)

  const ErrorFn = async (err: Error, prevComments: U[] | undefined, timeout: number = 1000) => {
    await new Promise(resolve => setTimeout(resolve, timeout))
    if (prevComments) {
      queryCache.setQueryData(getCacheKey(), prevComments)
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
      const prevComments = queryCache.getQueryData<U[]>(key)
      if (!prevComments)
        return { prevComments }

      const optimisticComments = prevComments.map(group => ({
        ...group,
        comments: group.comments.filter(c => c._id !== commentId),
      })).filter(group => group.comments.length > 0)

      queryCache.setQueryData(key, optimisticComments)
      return { prevComments, commentId }
    },
    onError: async (err, _, { prevComments }) => ErrorFn(err, prevComments),
  })

  const { mutate: updateComment } = useMutation<T, Partial<T>>({
    mutation: patchComment,
    onMutate: async (comment) => {
      const key = getCacheKey()
      const prevComments = queryCache.getQueryData<U[]>(key)
      if (!prevComments)
        return { prevComments }

      const optimisticComments = prevComments.map(group => ({
        ...group,
        comments: group.comments.map(c =>
          c._id === comment._id ? { ...c, ...comment } : c,
        ),
      }))
      queryCache.setQueryData(key, optimisticComments)
      return { prevComments }
    },
    onError: async (err: Error, _: Partial<T>, context: { prevComments?: U[] }) =>
      ErrorFn(err, context?.prevComments, 0),
  })

  const { mutate: createComment, ...postMutations } = useMutation<T, Partial<T>>({
    mutation: postComment,
    onMutate: async (newComment) => {
      const key = getCacheKey()
      queryCache.cancelQueries({ key })
      const prevComments = queryCache.getQueryData<U[]>(key)
      if (!prevComments)
        return { prevComments }

      const optimisticComment: Partial<T> = {
        ...newComment,
        _id: `${Date.now()}`,
        createdAt: newComment.createdAt,
      }
      const index = prevComments.findIndex(group =>
        dayjs(group.date).isSame(newComment.createdAt, 'day'),
      )

      const optimisticGroups = index !== -1
        ? [
            ...prevComments.slice(0, index),
            {
              ...prevComments[index],
              comments: [...prevComments[index].comments, optimisticComment],
            },
            ...prevComments.slice(index + 1),
          ]
        : [...prevComments, {
            date: newComment.createdAt,
            comments: [optimisticComment],
          }]
      queryCache.setQueryData(key, optimisticGroups)
      return { prevComments, optimisticGroups, optimisticComment }
    },
    onSuccess: (result, _, context: { optimisticComment?: Partial<T> }) => {
      const queryKey = getCacheKey()
      queryCache.setQueryData<CommentGroup[]>(queryKey, (old = []) => {
        return old.map(group => ({
          ...group,
          comments: group.comments.map(c =>
            c._id === context?.optimisticComment?._id ? result : c,
          ),
        }))
      })
    },
    onError: async (err: Error, _: Partial<T>, context: { prevComments?: U[] }) => {
      ErrorFn(err, context?.prevComments)
    },
  })

  return {
    ...postMutations,
    createComment,
    deleteComment,
    updateComment,
  }
})

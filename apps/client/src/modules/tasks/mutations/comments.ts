import { toRaw } from 'vue'
import { defineMutation, useMutation, useQueryCache } from '@pinia/colada'
import { toast } from 'vue-sonner'
import { deleteCommentById } from '../api'
import { useTaskData } from '../loaders/task-cl'
import type { Task } from '../types'

export const useDeleteComment = defineMutation(() => {
  const { data: task } = useTaskData()
  const queryCache = useQueryCache()

  const getCacheKey = () => ['task-loader', task.value?._id].filter(Boolean)

  const { mutate, ...mutation } = useMutation({
    mutation: deleteCommentById,
    onMutate: (id) => {
      const key = getCacheKey()
      const prev = queryCache.getQueryData<Task>(key)
      if (!prev || !task.value)
        return { prev }

      const updated = structuredClone(toRaw(prev))

      updated.commentsGroup?.forEach((group) => {
        const index = group.comments.findIndex(c => c._id === id)
        if (index > -1)
          group.comments.splice(index, 1)
      })
      updated.commentsGroup = updated.commentsGroup?.filter(g => g.comments.length > 0)
      queryCache.setQueryData(key, updated)
      return { prev }
    },
    onError: (err, _, context) => {
      const key = getCacheKey()
      if (context?.prev && key[1]) {
        queryCache.setQueryData(key, context.prev)
      }
      toast.error(err)
    },
  })

  return {
    ...mutation,
    deleteComment: mutate,
  }
})

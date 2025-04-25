import { defineMutation, useMutation, useQueryCache } from '@pinia/colada'
import { toast } from 'vue-sonner'
import { deleteTaskById, patchTask } from '../api/task'
import { useTaskDataLoader as useTaskData } from '../loaders/task-cl'
import type { Task } from '../types'
import { useBoardsStore } from '@/modules/boards/stores/boards'

export const useTaskMutations = defineMutation(<T extends Task>() => {
  const queryCache = useQueryCache()

  const { data: task } = useTaskData()
  const boardStore = useBoardsStore()

  const getCacheKey = () => ['task-loader', task.value?._id].filter(Boolean)

  const ErrorFn = async (err: Error, prevTask: T | undefined) => {
    if (prevTask) {
      queryCache.setQueryData(getCacheKey(), prevTask)
    }
    toast.error(err.message)
  }

  const { mutate: updateTask } = useMutation<T, Partial<T>>({
    mutation: data => patchTask({ ...data, _id: task.value?._id }) as Promise<T>,
    onMutate: (data) => {
      const key = getCacheKey()
      const prevTask = queryCache.getQueryData<T>(key)
      if (!prevTask)
        return { prevTask }

      const optimisticTask = { ...prevTask, ...data }
      queryCache.setQueryData(key, optimisticTask)
      return { prevTask }
    },
    onError: async (err: Error, _: Partial<T>, context: { prevTask?: T }) =>
      ErrorFn(err, context?.prevTask),
  })

  const { mutate: deleteTask, isLoading: isDeleting, error: deleteError } = useMutation<void, string>({
    mutation: deleteTaskById,
    onMutate: (id) => {
      const key = getCacheKey()
      const prevTask = queryCache.getQueryData<T>(key)
      if (!prevTask)
        return { prevTask }

      // mock delete
      // пофиксить с методами для доски
      //
      boardStore.board.columns!.forEach((column) => {
        column.cards = column.cards!.filter(task => task._id !== id)
      })
    },
  })

  return {
    updateTask,
    deleteTask,
    isDeleting,
    deleteError,
  }
})

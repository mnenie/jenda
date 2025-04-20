import { defineQuery, useQuery } from '@pinia/colada'
import { getTaskComments } from '../api/comments'
import { useTaskDataLoader } from '../loaders/task-cl'

export const useCommentsQuery = defineQuery(() => {
  const { data: task } = useTaskDataLoader()
  const query = useQuery({
    key: () => ['task-comments', task.value._id],
    query: async () => {
      return getTaskComments(task.value._id)
    },
    staleTime: 60 * 1000,
  })
  return {
    ...query,
  }
})

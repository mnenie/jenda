import { defineQuery, useQuery } from '@pinia/colada'
import { getTaskAttachments } from '../api/attachments'
import { useTaskDataLoader } from '../loaders/task-cl'

export const useAttachmentsQuery = defineQuery(() => {
  const { data: task } = useTaskDataLoader()
  const query = useQuery({
    key: () => ['task-attachments', task.value._id],
    query: async () => {
      return getTaskAttachments(task.value._id)
    },
    staleTime: 60 * 1000,
  })
  return {
    ...query,
  }
})

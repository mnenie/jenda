import { defineMutation, useMutation, useQueryCache } from '@pinia/colada'
import { toast } from 'vue-sonner'
import { useTaskDataLoader } from '../loaders/task-cl'
import { deleteAttachmentById, postTaskAttachments } from '../api/attachments'
import type { Attachment } from '../types'

export const useAttachmentsMutation = defineMutation(<T extends Attachment<File>>() => {
  const { data: task } = useTaskDataLoader()
  const queryCache = useQueryCache()

  const getCacheKey = () => ['task-attachments', task.value?._id].filter(Boolean)

  const ErrorFn = async (err: Error, prevAttachments: T[] | undefined, timeout: number = 1000) => {
    await new Promise(resolve => setTimeout(resolve, timeout))
    if (prevAttachments) {
      queryCache.setQueryData(getCacheKey(), prevAttachments)
    }
    toast.error(err.message)
  }

  const { mutate: addAttachments } = useMutation<T[], Partial<T[]>>({
    mutation: files => postTaskAttachments(task.value?._id, files as Partial<T>[]) as Promise<T[]>,
    onMutate: async (files) => {
      const key = getCacheKey()
      const prevAttachments = queryCache.getQueryData<T[]>(key)
      if (!prevAttachments)
        return { prevAttachments }

      const optimisticAttachments = [...prevAttachments, ...files]
      queryCache.setQueryData(key, optimisticAttachments)
      return { prevAttachments }
    },
    onError: async (err: Error, _: Partial<T[]>, context: { prevAttachments?: T[] }) =>
      ErrorFn(err, context?.prevAttachments),
  })

  const { mutate: deleteAttachment } = useMutation({
    mutation: (attachmentId: string) => deleteAttachmentById(task.value?._id, attachmentId),
    onMutate: async (attachmentId) => {
      const key = getCacheKey()
      const prevAttachments = queryCache.getQueryData<T[]>(key)
      if (!prevAttachments)
        return { prevAttachments }

      const optimisticAttachments = prevAttachments.filter(attachment => attachment.name !== attachmentId)
      queryCache.setQueryData(key, optimisticAttachments)
      return { prevAttachments, attachmentId }
    },
    onError: async (err, _, { prevAttachments }) => ErrorFn(err, prevAttachments),
  })

  return {
    addAttachments,
    deleteAttachment,
  }
})

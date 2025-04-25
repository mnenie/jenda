import { isRef, toValue } from 'vue'
import { toast } from 'vue-sonner'
import { useI18n } from 'vue-i18n'
import { useDropZone, useFileDialog } from '@vueuse/core'
import { useAttachmentsMutation } from '../mutations/attachments'
import type { MaybeRefOrGetter, ShallowRef } from 'vue'
import type { Attachment } from '../types/task'

export function useAttachments<A extends Attachment<File>, C extends new (...args: unknown[]) => any, T extends InstanceType<C>>(
  files: MaybeRefOrGetter<A[]>,
  dropZone: Readonly<ShallowRef<T>>,
) {
  const { t } = useI18n()
  const FILE_MAX_SIZE = 2 * 1024 * 1024

  const { addAttachments } = useAttachmentsMutation()

  const uploadFilesWithLimit = (_files: A[], limit: number) => {
    if (_files.length > limit || toValue(files).length >= limit) {
      toast.warning(t('task.attachments.alert', { count: 2 }), {
        richColors: true,
      })
      return
    }
    if (_files.some(file => file.size > FILE_MAX_SIZE)) {
      toast.error(t('task.attachments.too_large'), {
        richColors: true,
      })
      return
    }
    const filesWithLimit = Array.from(_files).slice(0, limit - toValue(files).length)
    if (isRef(files) && !filesWithLimit.some(file => toValue(files).some(f => f.name === file.name))) {
      addAttachments(filesWithLimit)
    }
  }

  function onDrop(dropFs: File[] /* return type err */ | null) {
    if (!dropFs)
      return
    uploadFilesWithLimit(dropFs as A[], 2)
  }

  const { isOverDropZone } = useDropZone(dropZone, {
    onDrop,
    dataTypes: ['image/jpeg', 'image/jpg', 'image/png'],
    multiple: true,
    preventDefaultForUnhandled: true,
  })

  const { open: browse, onChange } = useFileDialog({
    accept: 'image/png, image/jpg, image/jpeg',
    multiple: true,
  })

  onChange(async (fs) => {
    if (!fs?.length) {
      return
    }
    uploadFilesWithLimit(Array.from(fs) as A[], 2)
  })

  return {
    uploadFilesWithLimit,
    isOverDropZone,
    browse,
  }
}

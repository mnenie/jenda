import { toValue } from 'vue'
import { type MaybeRefOrGetter, useClipboard, useFileDialog } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { useI18n } from 'vue-i18n'
import { useTaskMutations } from '../mutations/task'

export function useTaskMenu(taskId: MaybeRefOrGetter<string>) {
  const { updateTask } = useTaskMutations()

  const clipboard = useClipboard({
    source: `\`${`#${toValue(taskId)}`}\``,
  })
  const { open, onChange } = useFileDialog({
    accept: 'image/*',
    multiple: false,
  })

  const { t } = useI18n()

  function copyTaskId() {
    clipboard.copy()
    toast.success(t('task.copied.title'), {
      description: t('task.copied.description'),
      richColors: true,
    })
  }

  function changeBackground() {
    open()
    onChange((files) => {
      if (!files)
        return
      const bgUrl = URL.createObjectURL(files[0])
      updateTask({
        _id: toValue(taskId),
        image: bgUrl,
      })
    })
  }

  return {
    copyTaskId,
    changeBackground,
  }
}

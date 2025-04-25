<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import JSZip from 'jszip'
// @ts-expect-error types for file-saver
import { saveAs } from 'file-saver'
import type { Attachment } from '../../types/task'

const props = defineProps<{
  attachments?: Attachment<File>[]
  taskId?: string
}>()

async function downloadAllAsZip() {
  if (!props.attachments?.length)
    return
  const zip = new JSZip()
  props.attachments.forEach((attachment) => {
    zip.file(attachment.name, attachment, { base64: true })
  })

  const content = await zip.generateAsync({ type: 'blob' })
  saveAs(content, `${props.taskId}_attachments.zip`)
}
</script>

<template>
  <div class="relative z-99 flex items-center justify-between gap-10 text-default">
    <p class="dark:text-neutral-100">
      {{ $t('task.attachments.title') }} <span class="text-neutral-500">({{ attachments?.length ?? 0 }})</span>
    </p>
    <div role="button" class="flex items-center gap-2 text-#266df0 cursor-pointer" :class="{ 'cursor-not-allowed opacity-50': !attachments?.length }" @click="downloadAllAsZip">
      <Icon icon="ci:download" class="w-4 h-4" />
      <span>{{ $t('task.attachments.download.all') }}</span>
    </div>
  </div>
</template>

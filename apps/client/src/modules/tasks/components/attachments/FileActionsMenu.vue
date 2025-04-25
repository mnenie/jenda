<script setup lang="ts">
// @ts-expect-error types for file-saver
import { saveAs } from 'file-saver'
import { Icon } from '@iconify/vue'
import { useAttachmentsMutation } from '../../mutations/attachments'
import type { Attachment } from '../../types/task'
import { UiDropdownMenu, UiDropdownMenuContent, UiDropdownMenuItem, UiDropdownMenuTrigger } from '@/shared/ui'

const props = defineProps<{
  attachment: Attachment<File>
}>()

const { deleteAttachment } = useAttachmentsMutation()

async function download() {
  await saveAs(props.attachment, props.attachment.name)
}
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <Icon icon="lucide:ellipsis" class="min-w-4 min-h-4 text-neutral-500" />
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end" class="w-fit">
      <UiDropdownMenuItem @select="download">
        <Icon icon="ci:download" class="w-4 h-4 text-neutral-500" />
        {{ $t('task.attachments.download.one') }}
      </UiDropdownMenuItem>
      <UiDropdownMenuItem class="dropdown-menu-destructive-item" @select="deleteAttachment(props.attachment.name)">
        <Icon icon="hugeicons:delete-04" class="w-4 h-4" />
        {{ $t('task.attachments.delete') }}
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

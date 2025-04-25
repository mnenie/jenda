<script setup lang="ts" generic="T extends typeof BrowseFiles, I extends InstanceType<T>">
import { useTemplateRef } from 'vue'
import { useTaskDataLoader as useTaskData } from '../../loaders/task-cl'
import { useAttachments } from '../../composables/attachments'
import { useAttachmentsQuery } from '../../queries/attachments'
import BrowseFiles from './BrowseFiles.vue'
import AllFilesInfo from './AllFilesInfo.vue'
import FilesList from './FilesList.vue'
import type { ShallowRef } from 'vue'
import type { Attachment } from '../../types'

const { data: task } = useTaskData()
const { data: attachments } = useAttachmentsQuery()

const dropZone = useTemplateRef<I>('dropZone')

const { browse, isOverDropZone } = useAttachments(
  attachments as ShallowRef<Attachment<File>[]>,
  dropZone,
)
</script>

<template>
  <div class="h-full w-[calc(100%-2rem)] overflow-y-hidden bg-transparent mx-auto py-2.5">
    <BrowseFiles ref="dropZone" :is-over-drop-zone :length="!!attachments?.length" @browse-files="browse" />
    <div class="flex flex-col gap-2">
      <AllFilesInfo :task-id="task._id" :attachments="attachments" />
      <FilesList v-if="attachments && attachments.length" :attachments="attachments" />
    </div>
  </div>
</template>

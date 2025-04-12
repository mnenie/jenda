<script setup lang="ts">
import { useTaskDataLoader as useTaskData } from '../loaders/task-cl'
import CommentsList from './comments/CommentsList.vue'
import InlineCommentEditor from './comments/InlineCommentEditor.vue'
import SectionTabs from './SectionTabs.vue'
import EmptyComments from './comments/EmptyComments.vue'

const { data: task } = useTaskData()
</script>

<template>
  <SectionTabs>
    <template #comments>
      <div class="h-full w-full overflow-y-hidden bg-transparent">
        <CommentsList v-if="task.commentsGroup?.length" />
        <EmptyComments v-else />
      </div>
      <InlineCommentEditor />
    </template>
  </SectionTabs>
</template>

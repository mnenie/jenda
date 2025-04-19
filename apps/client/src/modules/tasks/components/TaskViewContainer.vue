<script setup lang="ts">
import { useCommentsQuery } from '../queries/comments'
import type { TaskView } from '../types'
import TaskTabsContent from '@/modules/tasks/components/TaskTabsContent.vue'
import CommentsList from '@/modules/tasks/components/comments/CommentsList.vue'
import EmptyComments from '@/modules/tasks/components/comments/EmptyComments.vue'
import InlineCommentEditor from '@/modules/tasks/components/comments/InlineCommentEditor.vue'

defineProps<{
  view: TaskView
}>()

const { data: comments } = useCommentsQuery()
</script>

<template>
  <TaskTabsContent v-if="view === 'compact'" />
  <div v-else class="h-full w-full overflow-hidden">
    <div class="grid items-center grid-cols-2 h-full">
      <div class="h-full w-full border-r-2 dark:border-#1c1c1c">
        <!-- _todo -->
        main task content
      </div>
      <div class="relative h-full w-full overflow-y-auto">
        <div class="h-full w-full overflow-y-hidden bg-transparent">
          <CommentsList v-if="comments?.length" class="!mt-0" />
          <EmptyComments v-else />
        </div>
        <InlineCommentEditor />
      </div>
    </div>
  </div>
</template>

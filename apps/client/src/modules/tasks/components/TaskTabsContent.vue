<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTaskStore } from '../stores/task'
import CommentsList from './comments/CommentsList.vue'
import WriteNewComment from './comments/WriteNewComment.vue'
import SectionTabs from './SectionTabs.vue'
import EmptyComments from './comments/EmptyComments.vue'

const taskStore = useTaskStore()
const { task } = storeToRefs(taskStore)
</script>

<template>
  <SectionTabs>
    <template #comments>
      <div class="h-full w-full overflow-y-auto bg-transparent">
        <CommentsList v-if="task.commentsGroup?.length" />
        <EmptyComments v-else />
      </div>
      <WriteNewComment />
    </template>
  </SectionTabs>
</template>

<script setup lang="ts">
import { useCommentsQuery } from '../queries/comments'
import CommentsList from './comments/CommentsList.vue'
import InlineCommentEditor from './comments/InlineCommentEditor.vue'
import SectionTabs from './SectionTabs.vue'
import EmptyComments from './comments/EmptyComments.vue'

const { data: comments } = useCommentsQuery()
</script>

<template>
  <SectionTabs>
    <template #comments>
      <div class="h-full w-full overflow-y-hidden bg-transparent">
        <CommentsList v-if="comments?.length" />
        <EmptyComments v-else />
      </div>
      <InlineCommentEditor />
    </template>
  </SectionTabs>
</template>

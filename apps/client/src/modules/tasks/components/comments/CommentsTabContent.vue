<script setup lang="ts">
import { useCommentsQuery } from '../../queries/comments'
import CommentsList from './CommentsList.vue'
import InlineCommentEditor from './InlineCommentEditor.vue'
import EmptyComments from './EmptyComments.vue'

const { data: comments } = useCommentsQuery()
</script>

<template>
  <div class="h-full w-full overflow-y-hidden bg-transparent">
    <CommentsList v-if="comments?.length" />
    <EmptyComments v-else />
  </div>
  <InlineCommentEditor />
</template>
